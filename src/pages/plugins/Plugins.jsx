import React from 'react'
import './Plugins.css'
import { Link } from 'react-router-dom';
function Plugins() {
    const plugins = [
        {
          name: "Article Rewriter",
          description:
            "This plugin provides basic article rewriting facilities by replacing the words using their synonyms. Currently only English is supported.",
          version: "v1.0",
          author: "Miraz Mac",
          enabled: true,
        },
        {
          name: "Google News Sitemap",
          description: "This plugin provides sitemap for Google News consumption.",
          version: "v1.0",
          author: "Miraz Mac",
          enabled: true,
        },
        {
          name: "Instant Answer",
          description:
            "Instant answer plugin provides quick short answers for typical search queries.",
          version: "v1.0",
          author: "Miraz Mac",
          enabled: false,
        },
        {
          name: "Feed & Sitemap",
          description:
            "This plugin provides dynamic XML sitemaps and RSS Feed for the site.",
          version: "v1.0",
          author: "Miraz Mac",
          enabled: false,
        },
      ];
  return (
    <section id='content'>
        <main>
        <div class="head-title">
				<div class="left">
					<h1> Plugin pages.</h1>
					<ul class="breadcrumb">
						<li>
							<a href="#">Dashboard</a>
						</li>
						<li><i class='bx bx-chevron-right' ></i></li>
						<li>
							<a class="active" href="#">Plugin</a>
						</li>
					</ul>
				</div>
			</div>
        <div className="button-block">
        <Link to="#" className="create-button">+ Create</Link>
        </div>
        <div className="plugin-list-container">
      <table className="plugin-table">
        <thead>
          <tr>
            <th>PLUGIN</th>
            <th>DESCRIPTION</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {plugins.map((plugin, index) => (
            <tr key={index}>
              <td>
                <strong>{plugin.name}</strong>
                <div className="plugin-meta">
                  {plugin.version} | By {plugin.author} |{" "}
                  <a href="#details" className="details-link">
                    Details
                  </a>
                </div>
              </td>
              <td>{plugin.description}</td>
              <td>
                {plugin.enabled ? (
                  <button className="action-btn enable">✓ Enable</button>
                ) : (
                  <button className="action-btn disable">✗ Disable</button>
                )}
                <button className="action-btn delete">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button className="pagination-btn">Prev.</button>
        <button className="pagination-btn active">1</button>
        <button className="pagination-btn">Next</button>
      </div>
      <div className="entries-info">
        Showing 1-20 of total 4 entries.
      </div>
    </div>
            </main>
    </section>
  )
}

export default Plugins