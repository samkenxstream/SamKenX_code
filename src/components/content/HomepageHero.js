import React from "react";
import { Link } from "gatsby";

const primaryButtonText = "Get started";
const secondaryButtonText = "View leaderboard";

const primaryButtonTextProject = "Get started";
const secondaryButtonTextProject = "Join our Discord";

const HeroIndex = ({ viewMode }) => {
  return (
    <article className="hero">
      {!viewMode ||
        (viewMode === "project" && (
          <div className="hero__project type__copy grid__one-by-two--break-s limited-width">
            <div className="hero__left-side">
              <h1 className="type__headline__hero">
                <div>Secure your</div> <div>smart contracts.</div>
              </h1>
              <p>
                Top auditors compete to keep high severity bugs out of
                production. Start a public or private audit within 48 hours.
              </p>
              <div className="hero__buttons">
                <a
                  href="https://code4rena.typeform.com/i-want-an-audit"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={
                    primaryButtonTextProject + " (Opens in a new window)"
                  }
                  className="button button--primary"
                >
                  {primaryButtonTextProject}
                </a>
                <a
                  href="https://discord.gg/code4rena"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={
                    secondaryButtonTextProject + " (Opens in a new window)"
                  }
                  className="button button--secondary"
                >
                  {secondaryButtonTextProject}
                </a>
              </div>
            </div>
            <div className="hero__right-side type__copy">
              <div className="hero__statistic">
                <p className="type__headline__l hero__statistic-number">803</p>
                <p className="hero__statistic-unit hero__statistic-unit--short">
                  unique <br /> high-severity vulns
                </p>
              </div>
              <div className="hero__statistic">
                <p className="type__headline__l hero__statistic-number">
                  17,340
                </p>
                <p className="hero__statistic-unit hero__statistic-unit--short">
                  unique findings
                </p>
              </div>
              <div className="hero__statistic">
                <p className="type__headline__l hero__statistic-number">
                  3,215+
                </p>
                <p className="hero__statistic-unit hero__statistic-unit--short">
                  registered wardens
                </p>
              </div>
              <div className="hero__statistic">
                <p className="type__headline__l hero__statistic-number">217</p>
                <p className="hero__statistic-unit hero__statistic-unit--short">
                  audits completed
                </p>
              </div>
            </div>
          </div>
        ))}
      {viewMode === "warden" && (
        <div className="hero__wardens type__copy grid__one-by-two--break-s limited-width">
          <div className="hero__left-side">
            <h1 className="type__headline__hero">
              <div>Find bugs.</div>
              <div>Get paid.</div>
            </h1>
            <p>
              Auditors compete for a share of the prize pool. The rarer your
              findings, the more you get paid.
            </p>
            <div className="hero__buttons">
              <Link to={"/register"} className="button button--primary">
                {primaryButtonText}
              </Link>

              <Link to={"/leaderboard"} className="button button--secondary">
                {secondaryButtonText}
              </Link>
            </div>
          </div>
          <div className="hero__right-side type__copy">
            <div className="hero__statistic">
              <p className="type__headline__l hero__statistic-number">$14m+</p>
              <p className="hero__statistic-unit">earned by wardens</p>
            </div>
            <div className="hero__statistic">
              <p className="type__headline__l hero__statistic-number">
                $71,500
              </p>
              <p className="hero__statistic-unit">
                <span>
                  2023 highest single <span className="no-break">payout</span>
                </span>
              </p>
            </div>
            <div className="hero__statistic">
              <p className="type__headline__l hero__statistic-number">$9,860</p>
              <p className="hero__statistic-unit">
                2023 avg payout per competition for top 3
              </p>
            </div>
            <div className="hero__statistic">
              <p className="type__headline__l hero__statistic-number">100%</p>
              <p className="hero__statistic-unit">
                <span>
                  of satisfactory{" "}
                  <span className="no-break">findings paid</span> out
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </article>
  );
};

export default HeroIndex;
