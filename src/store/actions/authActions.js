export const createUser = (user) => {
  return {
    type: 'CREATE_USER',
    payload: {
      id: user.id,
      email: user.email,
      password: user.password,
      volunteer: user.volunteer
    }
  }
}

export const createUserDetails = (user) => {
  return {
    type: 'CREATE_USER_DETAILS',
    payload: {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      bio: user.bio
    }
  }
}

export const addInterestsToUser = (userInterests) => {
  return {
    type: 'ADD_USER_INTERESTS',
    payload: {
      id: userInterests.userId,
      interests: userInterests.choices
    }
  }
}