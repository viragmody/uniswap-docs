module.exports = {
  
  docs: [

    {
      type: 'category',
      label:'Core Concepts',
      items: [
        'concepts/landing',
        'concepts/faq',
        'concepts/concentrated-liquidity',
        'concepts/fees',
        'concepts/range-orders',
        'concepts/oracle',
        'concepts/glossary',
      ],
    },
    // {
    //   type: 'category',
    //   label: 'Guides',
    //   items: [
    //         'guides/landing',
          
    //   ]
    // },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/Deployments',
        {
          type: 'category',
          label: 'Periphery',
          items: [
            {
              type: 'category',
              label: 'Base',
              items: [
                'reference/periphery/base/BlockTimestamp',
                'reference/periphery/base/ERC721Permit',
                'reference/periphery/base/LiquidityManagement',
                'reference/periphery/base/Multicall',
                'reference/periphery/base/PeripheryImmutableState',
                'reference/periphery/base/PeripheryPayments',
                'reference/periphery/base/PeripheryValidation',
                'reference/periphery/base/SelfPermit',
              ]
            },
            {
              type: 'category',
              label: 'Interfaces',
              items: [

                {
                  type: 'category',
                  label: 'External',
                  items: [
                    'reference/periphery/interfaces/external/IERC20PermitAllowed',
                    'reference/periphery/interfaces/external/IERC1271',
                    'reference/periphery/interfaces/external/IERC20PermitAllowed',
                  ]
                },
                  'reference/periphery/interfaces/IERC20Metadata',
                  'reference/periphery/interfaces/IERC721Permit',
                  'reference/periphery/interfaces/IMulticall',
                  'reference/periphery/interfaces/INonfungiblePositionManager',
                  'reference/periphery/interfaces/INonfungibleTokenPositionDescriptor',
                  'reference/periphery/interfaces/IPeripheryImmutableState',
                  'reference/periphery/interfaces/IPeripheryPayments',
                  'reference/periphery/interfaces/IQuoter',
                  'reference/periphery/interfaces/ISelfPermit',
                  'reference/periphery/interfaces/ISwapRouter',
                  'reference/periphery/interfaces/ITickLens',
                  'reference/periphery/interfaces/IV3Migrator',           
                ]
            },  
            {
              type: 'category',
              label: 'Lens',
              items: [
                'reference/periphery/lens/Quoter',
                'reference/periphery/lens/TickLens',
              ]
            },    
            {
              type: 'category',
              label: 'Libraries',
              items: [
                'reference/periphery/libraries/Base64',
                'reference/periphery/libraries/BytesLib',
                'reference/periphery/libraries/CallbackValidation',
                'reference/periphery/libraries/ChainId',
                'reference/periphery/libraries/HexStrings',
                'reference/periphery/libraries/LiquidityAmounts',
                'reference/periphery/libraries/NFTDescriptor',
                'reference/periphery/libraries/Path',
                'reference/periphery/libraries/PoolAddress',
                'reference/periphery/libraries/PositionKey',
                'reference/periphery/libraries/TokenRatioSortOrder',
                'reference/periphery/libraries/TransferHelper',
              ]
            },    
          'reference/periphery/NonfungiblePositionManager',
          'reference/periphery/NonfungibleTokenPositionDescriptor',
          'reference/periphery/SwapRouter',
          'reference/periphery/V3Migrator',
        ]
      
    
        },
        {
          type: 'category',
          label: 'Libraries',
          items: [
            'reference/libraries/BitMath',
            'reference/libraries/FixedPoint96',
            'reference/libraries/FixedPoint96',
            'reference/libraries/FixedPoint128',
            'reference/libraries/FullMath',
            'reference/libraries/LiquidityMath',
            'reference/libraries/LowGasSafeMath',
            'reference/libraries/Oracle',
            'reference/libraries/Position',
            'reference/libraries/SafeCast',
            'reference/libraries/SecondsOutside',
            'reference/libraries/SqrtPriceMath',
            'reference/libraries/SwapMath',
            'reference/libraries/Tick',
            'reference/libraries/TickBitmap',
            'reference/libraries/TransferHelper',
            'reference/libraries/UnsafeMath',
          ]
        },
        {
          type: 'category',
          label: 'Interfaces',
          items: [
            {
              type: 'category',
              label: 'Callback',
              items: [
                  'reference/interfaces/callback/IUniswapV3FlashCallback',
                  'reference/interfaces/callback/IUniswapV3MintCallback',
                  'reference/interfaces/callback/IUniswapV3SwapCallback'
              ]
            },
            {
              type: 'category',
              label: 'Pool',
              items: [
                'reference/interfaces/pool/IUniswapV3PoolActions',
                'reference/interfaces/pool/IUniswapV3PoolDerivedState',
                'reference/interfaces/pool/IUniswapV3PoolEvents',
                'reference/interfaces/pool/IUniswapV3PoolImmutables',
                'reference/interfaces/pool/IUniswapV3PoolOwnerActions',
                'reference/interfaces/pool/IUniswapV3PoolState',
              ]
            },
            'reference/interfaces/IERC20Minimal',
            'reference/interfaces/IUniswapV3Factory',
            'reference/interfaces/IUniswapV3Pool',
            'reference/interfaces/IUniswapV3PoolDeployer',
          ]
        },
        'reference/NoDelegateCall',
        'reference/UniswapV3Factory',
        'reference/UniswapV3Pool',
        'reference/UniswapV3PoolDeployer',
        
      ],

      
    }
  ],


  // guides: [
  //   {
  //     type: 'category',
  //     label:'Landing',
  //     items: [
  //       'guides/landing',
  //     ],
  //   },
  //   {
  //     type: 'category',
  //     label:'Guides Overview',
  //     items: [
  //       'guides/guides-holder',
  //     ],
  //   },
  // ],

  reference: [
    {
      type: 'category',
      label:'Reference Overview',
      items: [
        'reference/reference-holder',
      ],
    },
    {
      type: 'category',
      label: 'Libraries',
      items: [
        'reference/libraries/BitMath',
        'reference/libraries/FixedPoint96',
      ]
    },
    {
      type: 'category',
      label: 'Interfaces',
      items: [
        {
          type: 'category',
          label: 'Callback',
          items: [
              'reference/interfaces/callback/IUniswapV3FlashCallback',
              'reference/interfaces/callback/IUniswapV3MintCallback',
              'reference/interfaces/callback/IUniswapV3SwapCallback'
          ]
        },
        {
          type: 'category',
          label: 'Pool',
          items: [
            'reference/interfaces/pool/IUniswapV3PoolActions',
            'reference/interfaces/pool/IUniswapV3PoolDerivedState',
            'reference/interfaces/pool/IUniswapV3PoolEvents',
            'reference/interfaces/pool/IUniswapV3PoolImmutables',
            'reference/interfaces/pool/IUniswapV3PoolOwnerActions',
            'reference/interfaces/pool/IUniswapV3PoolState',
          ]
        },
        'reference/interfaces/IERC20Minimal',
        'reference/interfaces/IUniswapV3Factory',
        'reference/interfaces/IUniswapV3Pool',
        'reference/interfaces/IUniswapV3PoolDeployer',
      ]
    },
    'reference/NoDelegateCall',
    'reference/UniswapV3Factory',
    'reference/UniswapV3Pool',
    'reference/UniswapV3PoolDeployer',
    
  ],
};