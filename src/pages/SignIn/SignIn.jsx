import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PageBanner from '../../components/PageBanner'
import signup from '../../assets/images/signin.jpg'
import { useForm } from 'react-hook-form'
import { useUserSignInMutation } from '../../features/auth/authAPI'
import { toast } from 'react-hot-toast'
import { storeToken } from '../../utils/token'
import { userPersistencyReducer } from '../../features/auth/authSlice'
import { useDispatch } from 'react-redux'

export default function SignIn () {
  const navigate = useNavigate()
  const distaptch = useDispatch()

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const [signin, { data, isLoading, isSuccess, isError, error }] =
    useUserSignInMutation()

  const signinHandle = useData => {
    signin(useData)
    reset()
  }

  useEffect(() => {
    if (isLoading)
      toast.loading('Signing Up...', { id: 'loading', duration: 800 })

    if (isSuccess) {
      storeToken(data.data.token)
      toast.success('Signed In', { id: 'succ' })
      distaptch(userPersistencyReducer(data.data.user))
      navigate('/')
    }

    if (isError) toast.error(error.data.error, { id: 'err' })
  }, [isLoading, isSuccess, isError, data, error, distaptch, navigate])

  return (
    <>
      <PageBanner bg_img={signup} title='Sign In' />
      <div className='hero py-8 min-h-[80vh] bg-base-200'>
        <div className='flex-col gap-5 hero-content md:gap-14 lg:flex-row'>
          <div className='flex-1 text-center'>
            <h1 className='text-4xl font-bold'>Sign In now!</h1>
            <p className='max-w-2xl py-6 '>
              Welcome to DarVoo! Join us to explore authentic Nigerian flavors,
              get exclusive updates, and enjoy a seamless catering experience.
              Sign up now to bring a taste of home to your table!
            </p>
          </div>
          <div className='flex-shrink-0 w-full max-w-xl shadow-2xl card bg-base-100'>
            <div className='card-body'>
              <form onSubmit={handleSubmit(signinHandle)}>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Email</span>
                  </label>
                  <input
                    type='email'
                    placeholder='riyadhossain@gmail.com'
                    className='rounded-md input input-bordered'
                    {...register('email', { required: true })}
                  />
                  {errors.email && (
                    <span className='mt-1 text-xs text-left text-error'>
                      Email is required
                    </span>
                  )}
                </div>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Password</span>
                  </label>
                  <input
                    type='password'
                    placeholder='password'
                    className='rounded-md input input-bordered'
                    {...register('password', { required: true })}
                  />
                  {errors.password && (
                    <span className='mt-1 text-xs text-left text-error'>
                      Password is required
                    </span>
                  )}
                  <label className='label'>
                    <span className='label-text-alt'>
                      Don't have any account?{' '}
                      <Link className=' link link-hover link-info' to='/signup'>
                        Sign Up
                      </Link>
                    </span>
                  </label>
                </div>
                <div className='flex flex-col gap-3 mt-6 form-control'>
                  <button type='submit' className='btn'>
                    Sign In
                  </button>
                  {/* <button className="btn">Continue With Google</button> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
