import React from 'react'
import { Link } from 'react-router-dom';

export default function Breadcrumb({ list }: { list: { url: string, name: string }[] }) {
  return (
    <section className="bg-gray-100 py-8 px-4">
      <div className="container mx-auto">
        <ul className="breadcrumb">
          {
            list.map((item: { url: string; name: string }, index: number) => {
              const arias = index === list.length ? {"aria-label": "current-page"} : {}
              return (
                <li key={item.url}>
                  <Link to={item.url} {...arias}>{item.name}</Link>
                </li>
              )
            })
          }
          {/* <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="#">Office Room</a>
          </li>
          <li>
            <a href="#" aria-label="current-page">Details</a>
          </li> */}
        </ul>
      </div>
    </section>
  )
}