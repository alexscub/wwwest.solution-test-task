import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { doLogout } from '../../redux/session/sessionActions';
import profileImage from '../../assets/man-laptop.svg';

// eslint-disable-next-line no-shadow
const Profile = ({ doLogout }) => {
  return (
    <section className="container">
      <h2 className="title is-2 has-text-centered">Welcome back!</h2>
      <div className="box">
        <article className="columns is-multiline-tablet">
          <div className="media-left column is-12-mobile is-4-tablet">
            <figure className="image">
              <img src={profileImage} alt="profileImage" />
            </figure>
          </div>
          <div className="media-content column is-12-mobile is-8-tablet ">
            <div className="content">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate praesentium laudantium optio cum? Aliquid laborum
                repellat ratione enim veniam quasi labore modi sit temporibus
                illum voluptates esse accusantium dolorem aperiam ipsa aut
                voluptas, molestiae, iste eaque in consequatur. Soluta
                repellendus consequatur voluptas voluptates suscipit reiciendis
                dolorum nemo quo saepe non voluptate amet nobis, dolores esse
                magnam ipsam earum, praesentium nisi reprehenderit quam! Ipsum
                eveniet voluptate id. Aperiam esse officia voluptates quos,
                nostrum dolorem eveniet et ex. Eaque animi amet iste molestiae
                molestias aut possimus consectetur vel fugiat reiciendis
                voluptatum debitis perspiciatis tenetur alias, illo hic?
                Deserunt accusamus praesentium nam distinctio dignissimos et,
                quis dolorum pariatur exercitationem illum? Dolore perferendis
                aperiam debitis, facere, qui esse quibusdam illum tenetur modi
                necessitatibus reprehenderit totam, magnam nostrum similique et
                ullam nesciunt. Architecto error voluptas aperiam aspernatur
                dicta dolores hic, autem nemo? Maxime facere voluptatum fugiat
                libero fugit labore ipsam ratione accusamus rerum cupiditate
                nesciunt nam corporis ducimus quis maiores, dolores aspernatur
                eaque a exercitationem mollitia doloribus earum amet officia
                nostrum. Nemo deleniti ipsam accusamus praesentium illo. Dolorem
                sequi quae non reprehenderit! Sequi repudiandae, ab tenetur
                assumenda ipsa similique obcaecati, necessitatibus corrupti
                harum quis dolores, aut delectus repellendus temporibus eaque in
                a voluptate nihil doloribus dolorum. Fugiat, nemo atque. Modi
                possimus quod voluptates nulla autem quo repudiandae facilis
                voluptatum quas perspiciatis quae soluta, suscipit eligendi
                similique rem cumque nemo temporibus aut velit consequatur
              </p>
            </div>
          </div>
        </article>
      </div>
      <div className="columns is-centered">
        <div className="field column is-5-tablet is-4-desktop">
          <button
            type="submit"
            className="button is-primary is-medium is-normal is-fullwidth"
            onClick={() => doLogout()}
          >
            Logout
          </button>
        </div>
      </div>
    </section>
  );
};

Profile.propTypes = {
  doLogout: PropTypes.func.isRequired,
};

export default connect(null, { doLogout })(Profile);
