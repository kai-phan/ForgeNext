import React from 'react';
import Link from 'next/link';

type Props = {
  data: Data[];
  onClick?: (urn: string) => void;
};

export type Data = {
  thumbnail: string;
  urn: string;
};

const Sider: React.FC<Props> = ({ data = [], onClick }) => {
  return (
    <aside>
      <h5 className="text-muted mb-2">Model List</h5>
      <div className="row">
        {data.map(({ urn, thumbnail }) => (
          <div className="col-6 col-lg-3 mb-5" key={urn}>
            <Link href={`/${urn}`}>
              <div className="card h-100 shadow-sm p-3 bg-body rounded cursor-pointer">
                <img
                  // src={`data:image/jpeg;base64, ${thumbnail}`}
                  src={`${thumbnail}`}
                  alt="urn"
                  className="card-img-top"
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sider;
