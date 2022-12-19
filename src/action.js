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

export const getPage =
  (page = 1) =>
  async (dispatch) => {
    try {
      dispatch({
        type: 'pageRequest',
      });

      dispatch({
        type: 'pageSuccess',
        payload: page,
      });
    } catch (error) {
      dispatch({
        type: 'pageFailure',
        payload: error.response.data.message,
      });
    }
  };

export const getFilter = (filter) => async (dispatch) => {
  try {
    dispatch({
      type: 'filterRequest',
    });

    dispatch({
      type: 'filterSuccess',
      payload: filter,
    });
  } catch (error) {
    dispatch({
      type: 'filterFailure',
      payload: error.response.data.message,
    });
  }
};
