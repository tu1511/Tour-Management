import React, { useEffect, useState } from "react";
import CommonSection from "../shared/CommonSection";
import "../styles/Tour.css";

import SearchBar from "../shared/SearchBar";
import TourCard from "../shared/TourCard";
import NewLetter from "../shared/NewsLetter";
import { Container, Row, Col } from "reactstrap";

import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";

const Tours = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const {
    data: tours,
    error,
    loading,
  } = useFetch(`${BASE_URL}/tours?page=${page}`);
  const { data: tourCount } = useFetch(`${BASE_URL}/tours/search/getTourCount`);

  useEffect(() => {
    const pages = Math.ceil(tourCount / 8);
    setPageCount(pages);
    window.scrollTo(0, 0);
  }, [page, tourCount, tours]);

  return (
    <>
      <CommonSection title={"All Tours"} />

      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          {loading && (
            <h4 className="text-center pt-5">Loading................</h4>
          )}
          {error && <h4 className="text-center pt-5">{error}</h4>}
          {!loading && !error && (
            <Row>
              {tours?.map((tour) => (
                <Col lg="3" md="6" sm="6" key={tour._id} className="mb-4">
                  <TourCard tour={tour} />
                </Col>
              ))}
              <Col lg="12">
                <div className="pagination d-flex justify-content-center align-items-center gap-3 mt-4">
                  {[...Array(pageCount).keys()].map((number) => (
                    <span
                      key={number}
                      onClick={() => setPage(number)}
                      className={page === number ? "active__page" : ""}
                    >
                      {number + 1}
                    </span>
                  ))}
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </section>
      <NewLetter />
    </>
  );
};

export default Tours;
