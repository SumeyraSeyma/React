import PropTypes from 'prop-types';

function User ({isLoggedIn, name, surname, age, friends}) {
    return (
    
    <>
    <h1>
    {isLoggedIn ? `${name} ${surname} (${age})` : 'Giriş Yapmadınız'}
    </h1>;

    {
        friends.map((friend)=> (
        <div key ={friend.id}>{friend.name}</div>))
    }
    
    </>
    );
    
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    age: PropTypes.number,
    friends: PropTypes.array,
};

export default User;