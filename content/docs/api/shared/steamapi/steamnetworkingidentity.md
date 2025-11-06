---
title: SteamNetworkingIdentity
---

```csharp
[Serializable]
public struct SteamNetworkingIdentity : IEquatable<SteamNetworkingIdentity>
```

#### Implements

#### Inherited Members

## Fields

### k_cbMaxGenericBytes

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingIdentity.cs#L33)

```csharp
public const int k_cbMaxGenericBytes = 32
```

#### Field Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### k_cchMaxGenericString

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingIdentity.cs#L31)

```csharp
public const int k_cchMaxGenericString = 32
```

#### Field Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### k_cchMaxString

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingIdentity.cs#L30)

```csharp
public const int k_cchMaxString = 128
```

#### Field Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### k_cchMaxXboxPairwiseID

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingIdentity.cs#L32)

```csharp
public const int k_cchMaxXboxPairwiseID = 33
```

#### Field Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### m_eType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingIdentity.cs#L16)

```csharp
public ESteamNetworkingIdentityType m_eType
```

#### Field Value

- [ESteamNetworkingIdentityType](/docs/api/shared/steamapi/esteamnetworkingidentitytype)

## Methods

### Clear()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingIdentity.cs#L39)

```csharp
public void Clear()
```

### Equals(SteamNetworkingIdentity)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingIdentity.cs#L189)

```csharp
public bool Equals(SteamNetworkingIdentity x)
```

#### Parameters

- **x**: [SteamNetworkingIdentity](/docs/api/shared/steamapi/steamnetworkingidentity)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetFakeIPType()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingIdentity.cs#L136)

```csharp
public ESteamNetworkingFakeIPType GetFakeIPType()
```

#### Returns

- [ESteamNetworkingFakeIPType](/docs/api/shared/steamapi/esteamnetworkingfakeiptype)

### GetGenericBytes(out int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingIdentity.cs#L182)

```csharp
public byte[] GetGenericBytes(out int cbLen)
```

#### Parameters

- **cbLen**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]

### GetGenericString()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingIdentity.cs#L170)

```csharp
public string GetGenericString()
```

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### GetIPAddr()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingIdentity.cs#L117)

```csharp
public SteamNetworkingIPAddr GetIPAddr()
```

#### Returns

- [SteamNetworkingIPAddr](/docs/api/shared/steamapi/steamnetworkingipaddr)

### GetIPv4()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingIdentity.cs#L131)

```csharp
public uint GetIPv4()
```

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### GetPSNID()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingIdentity.cs#L94)

```csharp
public ulong GetPSNID()
```

#### Returns

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### GetStadiaID()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingIdentity.cs#L105)

```csharp
public ulong GetStadiaID()
```

#### Returns

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### GetSteamID()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingIdentity.cs#L56)

```csharp
public CSteamID GetSteamID()
```

#### Returns

- [CSteamID](/docs/api/shared/steamapi/csteamid)

### GetSteamID64()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingIdentity.cs#L68)

```csharp
public ulong GetSteamID64()
```

#### Returns

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### GetXboxPairwiseID()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingIdentity.cs#L83)

```csharp
public string GetXboxPairwiseID()
```

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### IsFakeIP()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingIdentity.cs#L141)

```csharp
public bool IsFakeIP()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsInvalid()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingIdentity.cs#L45)

```csharp
public bool IsInvalid()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsLocalHost()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingIdentity.cs#L155)

```csharp
public bool IsLocalHost()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ParseString(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingIdentity.cs#L213)

```csharp
public bool ParseString(string pszStr)
```

#### Parameters

- **pszStr**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetGenericBytes(byte[], uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingIdentity.cs#L176)

```csharp
public bool SetGenericBytes(byte[] data, uint cbLen)
```

#### Parameters

- **data**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]
- **cbLen**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetGenericString(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingIdentity.cs#L161)

```csharp
public bool SetGenericString(string pszString)
```

#### Parameters

- **pszString**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetIPAddr(SteamNetworkingIPAddr)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingIdentity.cs#L111)

```csharp
public void SetIPAddr(SteamNetworkingIPAddr addr)
```

#### Parameters

- **addr**: [SteamNetworkingIPAddr](/docs/api/shared/steamapi/steamnetworkingipaddr)

### SetIPv4Addr(uint, ushort)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingIdentity.cs#L125)

```csharp
public void SetIPv4Addr(uint nIPv4, ushort nPort)
```

#### Parameters

- **nIPv4**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **nPort**: [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### SetLocalHost()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingIdentity.cs#L149)

```csharp
public void SetLocalHost()
```

### SetPSNID(ulong)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingIdentity.cs#L88)

```csharp
public void SetPSNID(ulong id)
```

#### Parameters

- **id**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### SetStadiaID(ulong)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingIdentity.cs#L99)

```csharp
public void SetStadiaID(ulong id)
```

#### Parameters

- **id**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### SetSteamID(CSteamID)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingIdentity.cs#L50)

```csharp
public void SetSteamID(CSteamID steamID)
```

#### Parameters

- **steamID**: [CSteamID](/docs/api/shared/steamapi/csteamid)

### SetSteamID64(ulong)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingIdentity.cs#L62)

```csharp
public void SetSteamID64(ulong steamID)
```

#### Parameters

- **steamID**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### SetXboxPairwiseID(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingIdentity.cs#L74)

```csharp
public bool SetXboxPairwiseID(string pszString)
```

#### Parameters

- **pszString**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ToString(out string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingIdentity.cs#L200)

```csharp
public void ToString(out string buf)
```

#### Parameters

- **buf**: [string](https://learn.microsoft.com/dotnet/api/system.string)

