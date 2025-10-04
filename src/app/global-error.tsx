"use client";

import React from "react";

type Props = {};

const GlobalError = (props: Props) => {
  return (
    <html>
      <body>
        <div>
          <p>Something globally went wrong</p>
        </div>
      </body>
    </html>
  );
};

export default GlobalError;
