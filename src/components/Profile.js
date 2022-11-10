import React from 'react';
import Marks from './marks.json';

function Profile() {
  return (
      <div className='markssheet'>
          {
              Marks && Marks.map(mark => {
                  if (mark.email === "abc@gmail.com") {
                      return (
                        <div className="mark" key={mark.id}>
                          <h2>{mark.email}</h2>
                          <br />
                          <ul>
                            <li>
                              <strong>MATHS MARKS:</strong>
                              {mark.maths}
                            </li>
                            <br />
                            <li>
                              <strong>SCIENCE MARKS:</strong>
                              {mark.science}
                            </li>
                            <br />
                            <li>
                              <strong>ENGINEERING PHYSICS MARKS:</strong>
                              {mark.engineeringphysics}
                            </li>
                            <br />
                            <li>
                              <strong>ENGLISH MARKS:</strong>
                              {mark.english}
                            </li>
                            <br />
                            <li>
                              <strong>COMPUTERS MARKS:</strong>
                              {mark.computers}
                            </li>{" "}
                            <br />
                            <li>
                              <strong>CHEMISTRY MARKS:</strong>
                              {mark.chemistry}
                            </li>
                            <br />
                            <li>
                              <strong>GK: MARKS</strong>
                              {mark.gk}
                            </li>
                            <br />
                          </ul>
                        </div>
                      );
                  }
              })
          }
          
    </div>
  )
}

export default Profile