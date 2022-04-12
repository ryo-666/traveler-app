import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
        <header>
            <h1>
                <Link href="/hotel">traveler app</Link>
            </h1>
        </header>
        <style jsx>
            {`
                header {
                    padding: 0 30px;
                    height: 64px;
                    margin-top: 0px;
                    transform: translateY(0px);
                    left: 0px;
                    top: 0;
                    right: 0px;
                    z-index: 100;
                    position: fixed;
                    background-color: #ffffff;
                    box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);
                }

                h1 {
                    margin: 0;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    width: fit-content;
                }
            `}
        </style>
    </>
  )
}

export default Header