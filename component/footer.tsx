import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>
        <footer>
            <ul>
                <li>
                    <Link href="/hotel">
                        <a>一覧</a>
                    </Link>
                </li>
                <li>
                    <Link href="/detail">
                        <a>詳細</a>
                    </Link>
                </li>
            </ul>
        </footer>
        <style jsx>
            {`
                footer {
                    padding: 0 30px;
                    height: 64px;
                    margin-top: 0px;
                    transform: translateY(0px);
                    left: 0px;
                    bottom: 0;
                    right: 0px;
                    z-index: 100;
                    position: fixed;
                    background-color: #ffffff;
                    box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);
                }

                ul {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin: 0 auto;
                    max-width: 200px;
                    padding: 0;
                    height: 100%;
                }

                li {
                    height: 100%;
                    padding: 5px 15px;
                    display: flex;
                    align-items: center;
                }

                li a {
                    cursor: pointer;
                }
            `}
        </style>
    </>
  )
}

export default Footer