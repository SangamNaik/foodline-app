import axios from 'axios';

export const getData = () => async (dispatch) => {
  try {
    dispatch({
      type: 'dataRequest',
    });

    const { data } = await axios.get('data.json');
    dispatch({
      type: 'dataSuccess',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'dataFailure',
      payload: error.response.data.message,
    });
  }
};

export const paginationData = (page) => async (dispatch) => {
  try {
    dispatch({
      type: 'paginationDataRequest',
    });

    const {
      data: { meals },
    } = await axios.get('data.json');
    // let paginationData = data.meals((page - 1) * 3, page * 3);
    dispatch({
      type: 'paginationDataSuccess',
      payload: meals.slice((page - 1) * 3, page * 3),
    });
  } catch (error) {
    dispatch({
      type: 'paginationDataFailure',
      payload: error.response.data.message,
    });
  }
};
