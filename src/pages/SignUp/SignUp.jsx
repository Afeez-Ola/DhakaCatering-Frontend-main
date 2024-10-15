import React from 'react'
import { useNavigate } from 'react-router-dom'
import PageBanner from '../../components/PageBanner'
import signup from '../../assets/images/signin.jpg'
import { useForm, useWatch } from 'react-hook-form'
import { useState } from 'react'
import { useEffect } from 'react'
import { useUserSignUpMutation } from '../../features/auth/authAPI'
import { toast } from 'react-hot-toast'
import { useRef } from 'react'
import { storeToken } from '../../utils/token'
import { userPersistencyReducer } from '../../features/auth/authSlice'
import { useDispatch } from 'react-redux'

export default function SignUp () {
  const navigate = useNavigate()
  const distaptch = useDispatch()
  const [disabled, setDisabled] = useState(true)
  let errorMessage = useRef('Something went wrong')

  const [signupFunc, { isLoading, isError, isSuccess, error, data }] =
    useUserSignUpMutation()

  const {
    reset,
    control,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const password = useWatch({ control, name: 'password' })
  const confirmPassword = useWatch({ control, name: 'confirmPassword' })

  useEffect(() => {
    if (password === confirmPassword && confirmPassword) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [password, confirmPassword])

  const handleSignUp = async userData => {
    signupFunc(userData)
    reset()
  }

  useEffect(() => {
    if (isLoading)
      toast.loading('Signing Up...', { id: 'loading', duration: 800 })

    if (error) {
      if (error.data.error.includes('duplicate key error'))
        errorMessage.current = 'User with same credentials is exist'
    }

    if (isSuccess) {
      storeToken(data.data.token)
      toast.success('Signed In', { id: 'succ' })
      distaptch(userPersistencyReducer(data.data.user))
      navigate('/')
    }
    if (isError)
      toast.error(error.data.error || errorMessage.current, { id: 'err' })
  }, [
    isLoading,
    isSuccess,
    isError,
    errorMessage,
    error,
    data,
    distaptch,
    navigate
  ])

  return (
    <>
      <PageBanner bg_img={signup} title='Sign Up' />
      <div className='min-h-screen pt-12 pb-12 hero bg-base-200'>
        <div className='flex-col gap-5 hero-content md:gap-14 lg:flex-row'>
          <div className='flex-1 text-center'>
            <h1 className='text-4xl font-bold'>Sign Up Now!</h1>
            <p className='max-w-2xl py-6 '>
              Welcome to DarVoo! Join us to explore authentic Nigerian flavors,
              get exclusive updates, and enjoy a seamless catering experience.
              Sign up now to bring a taste of home to your table!
            </p>
          </div>
          <div className='flex-shrink-0 w-full max-w-xl shadow-2xl card bg-base-100'>
            <div className='card-body'>
              <form
                onSubmit={handleSubmit(handleSignUp)}
                className='flex flex-col gap-1'
              >
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Full Name</span>
                  </label>
                  <input
                    type='text'
                    placeholder='Riyad Hossain'
                    className='rounded-md input input-bordered'
                    {...register('fullName', { required: true })}
                  />
                  {errors.fullName && (
                    <span className='mt-1 text-xs text-left text-error'>
                      Full Name is required
                    </span>
                  )}
                </div>
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
                    <span className='label-text'>Phone</span>
                  </label>
                  <input
                    type='number'
                    placeholder='01703790978'
                    className='rounded-md input input-bordered'
                    {...register('contactNumber', {
                      required: true,
                      maxLength: 11,
                      minLength: 11
                    })}
                  />
                  {errors.phone && (
                    <span className='mt-1 text-xs text-left text-error'>
                      Valid Bangladeshi number is required
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
                </div>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Confirm Password</span>
                  </label>
                  <input
                    type='password'
                    placeholder='password'
                    className='rounded-md input input-bordered'
                    {...register('confirmPassword', { required: true })}
                  />
                </div>

                <div className='flex flex-col gap-3 mt-6 form-control'>
                  <button type='submit' disabled={disabled} className='btn'>
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

/* <div className="form-control">
                  <label className="label">
                    <span className="label-text">Address</span>
                  </label>
                  <textarea
                    rows={3}
                    type="text"
                    placeholder="PA-150, Bashtola Masgid, South Badda, Dhaka - 1224"
                    className="rounded-md resize-none textarea input-bordered"
                  />
                  <label className="label">
                    <span className="label-text-alt">
                      Already have an account?{" "}
                      <Link className=" link link-hover link-info" to="/signin">
                        Sign In
                      </Link>
                    </span>
                  </label>
                </div> */
