---
title: CSteamID
---

```csharp
[Serializable]
public struct CSteamID : IEquatable<CSteamID>, IComparable<CSteamID>
```

#### Implements

#### Inherited Members

## Constructors

### CSteamID(AccountID_t, EUniverse, EAccountType)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L166)

```csharp
public CSteamID(AccountID_t unAccountID, EUniverse eUniverse, EAccountType eAccountType)
```

#### Parameters

- **unAccountID**: [AccountID_t](/docs/api/shared/steamapi/accountid_t)
- **eUniverse**: [EUniverse](/docs/api/shared/steamapi/euniverse)
- **eAccountType**: [EAccountType](/docs/api/shared/steamapi/eaccounttype)

### CSteamID(AccountID_t, uint, EUniverse, EAccountType)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L172)

```csharp
public CSteamID(AccountID_t unAccountID, uint unAccountInstance, EUniverse eUniverse, EAccountType eAccountType)
```

#### Parameters

- **unAccountID**: [AccountID_t](/docs/api/shared/steamapi/accountid_t)
- **unAccountInstance**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **eUniverse**: [EUniverse](/docs/api/shared/steamapi/euniverse)
- **eAccountType**: [EAccountType](/docs/api/shared/steamapi/eaccounttype)

### CSteamID(ulong)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L181)

```csharp
public CSteamID(ulong ulSteamID)
```

#### Parameters

- **ulSteamID**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### CSteamID(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L186)

```csharp
public CSteamID(string sSteamID)
```

#### Parameters

- **sSteamID**: [string](https://learn.microsoft.com/dotnet/api/system.string)

## Fields

### LanModeGS

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L161)

```csharp
public static readonly CSteamID LanModeGS
```

#### Field Value

- [CSteamID](/docs/api/shared/steamapi/csteamid)

### Nil

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L159)

```csharp
public static readonly CSteamID Nil
```

#### Field Value

- [CSteamID](/docs/api/shared/steamapi/csteamid)

### NonSteamGS

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L163)

```csharp
public static readonly CSteamID NonSteamGS
```

#### Field Value

- [CSteamID](/docs/api/shared/steamapi/csteamid)

### NotInitYetGS

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L162)

```csharp
public static readonly CSteamID NotInitYetGS
```

#### Field Value

- [CSteamID](/docs/api/shared/steamapi/csteamid)

### OutofDateGS

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L160)

```csharp
public static readonly CSteamID OutofDateGS
```

#### Field Value

- [CSteamID](/docs/api/shared/steamapi/csteamid)

### m_SteamID

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L164)

```csharp
public ulong m_SteamID
```

#### Field Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

## Methods

### BAnonAccount()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L316)

```csharp
public bool BAnonAccount()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BAnonGameServerAccount()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L263)

```csharp
public bool BAnonGameServerAccount()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BAnonUserAccount()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L324)

```csharp
public bool BAnonUserAccount()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BBlankAnonAccount()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L239)

```csharp
public bool BBlankAnonAccount()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BChatAccount()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L289)

```csharp
public bool BChatAccount()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BClanAccount()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L280)

```csharp
public bool BClanAccount()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BConsoleUserAccount()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L332)

```csharp
public bool BConsoleUserAccount()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BContentServerAccount()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L271)

```csharp
public bool BContentServerAccount()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BGameServerAccount()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L247)

```csharp
public bool BGameServerAccount()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BIndividualAccount()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L307)

```csharp
public bool BIndividualAccount()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BPersistentGameServerAccount()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L255)

```csharp
public bool BPersistentGameServerAccount()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Clear()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L215)

```csharp
public void Clear()
```

### CompareTo(CSteamID)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L473)

```csharp
public int CompareTo(CSteamID other)
```

#### Parameters

- **other**: [CSteamID](/docs/api/shared/steamapi/csteamid) - An object to compare with this instance.

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - A value that indicates the relative order of the objects being compared. The return value has these meanings:

 <table><thead><tr><th class="term"> Value</th><th class="description"> Meaning</th></tr></thead><tbody><tr><td class="term"> Less than zero</td><td class="description"> This instance precedes <code class="paramref">other</code> in the sort order.</td></tr><tr><td class="term"> Zero</td><td class="description"> This instance occurs in the same position in the sort order as <code class="paramref">other</code>.</td></tr><tr><td class="term"> Greater than zero</td><td class="description"> This instance follows <code class="paramref">other</code> in the sort order.</td></tr></tbody></table>

### CreateBlankAnonLogon(EUniverse)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L220)

```csharp
public void CreateBlankAnonLogon(EUniverse eUniverse)
```

#### Parameters

- **eUniverse**: [EUniverse](/docs/api/shared/steamapi/euniverse)

### CreateBlankAnonUserLogon(EUniverse)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L228)

```csharp
public void CreateBlankAnonUserLogon(EUniverse eUniverse)
```

#### Parameters

- **eUniverse**: [EUniverse](/docs/api/shared/steamapi/euniverse)

### Equals(object)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L439)

```csharp
public override bool Equals(object other)
```

#### Parameters

- **other**: [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if <code class="paramref">obj</code> and this instance are the same type and represent the same value; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### Equals(CSteamID)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L468)

```csharp
public bool Equals(CSteamID other)
```

#### Parameters

- **other**: [CSteamID](/docs/api/shared/steamapi/csteamid) - An object to compare with this object.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if the current object is equal to the <code class="paramref">other</code> parameter; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### GetAccountID()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L358)

```csharp
public AccountID_t GetAccountID()
```

#### Returns

- [AccountID_t](/docs/api/shared/steamapi/accountid_t)

### GetEAccountType()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L368)

```csharp
public EAccountType GetEAccountType()
```

#### Returns

- [EAccountType](/docs/api/shared/steamapi/eaccounttype)

### GetEUniverse()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L373)

```csharp
public EUniverse GetEUniverse()
```

#### Returns

- [EUniverse](/docs/api/shared/steamapi/euniverse)

### GetHashCode()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L444)

```csharp
public override int GetHashCode()
```

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - A 32-bit signed integer that is the hash code for this instance.

### GetSteamID()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L413)

```csharp
public string GetSteamID()
```

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### GetSteamID3()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L418)

```csharp
public string GetSteamID3()
```

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### GetSteamID32()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L423)

```csharp
public uint GetSteamID32()
```

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### GetSteamID64()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L408)

```csharp
public ulong GetSteamID64()
```

#### Returns

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### GetSteamIDOnline()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L428)

```csharp
public string GetSteamIDOnline()
```

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### GetUnAccountInstance()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L363)

```csharp
public uint GetUnAccountInstance()
```

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### InstancedSet(AccountID_t, uint, EUniverse, EAccountType)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L207)

```csharp
public void InstancedSet(AccountID_t unAccountID, uint unInstance, EUniverse eUniverse, EAccountType eAccountType)
```

#### Parameters

- **unAccountID**: [AccountID_t](/docs/api/shared/steamapi/accountid_t)
- **unInstance**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **eUniverse**: [EUniverse](/docs/api/shared/steamapi/euniverse)
- **eAccountType**: [EAccountType](/docs/api/shared/steamapi/eaccounttype)

### IsLobby()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L297)

```csharp
public bool IsLobby()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsValid()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L379)

```csharp
public bool IsValid()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Set(AccountID_t, EUniverse, EAccountType)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L191)

```csharp
public void Set(AccountID_t unAccountID, EUniverse eUniverse, EAccountType eAccountType)
```

#### Parameters

- **unAccountID**: [AccountID_t](/docs/api/shared/steamapi/accountid_t)
- **eUniverse**: [EUniverse](/docs/api/shared/steamapi/euniverse)
- **eAccountType**: [EAccountType](/docs/api/shared/steamapi/eaccounttype)

### SetAccountID(AccountID_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L337)

```csharp
public void SetAccountID(AccountID_t other)
```

#### Parameters

- **other**: [AccountID_t](/docs/api/shared/steamapi/accountid_t)

### SetAccountInstance(uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L342)

```csharp
public void SetAccountInstance(uint other)
```

#### Parameters

- **other**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### SetEAccountType(EAccountType)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L348)

```csharp
public void SetEAccountType(EAccountType other)
```

#### Parameters

- **other**: [EAccountType](/docs/api/shared/steamapi/eaccounttype)

### SetEUniverse(EUniverse)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L353)

```csharp
public void SetEUniverse(EUniverse other)
```

#### Parameters

- **other**: [EUniverse](/docs/api/shared/steamapi/euniverse)

### ToString()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L434)

```csharp
public override string ToString()
```

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - The fully qualified type name.

## Operators

### operator ==(CSteamID, CSteamID)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L449)

```csharp
public static bool operator ==(CSteamID x, CSteamID y)
```

#### Parameters

- **x**: [CSteamID](/docs/api/shared/steamapi/csteamid)
- **y**: [CSteamID](/docs/api/shared/steamapi/csteamid)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### explicit operator CSteamID(ulong)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L459)

```csharp
public static explicit operator CSteamID(ulong value)
```

#### Parameters

- **value**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

#### Returns

- [CSteamID](/docs/api/shared/steamapi/csteamid)

### explicit operator ulong(CSteamID)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L463)

```csharp
public static explicit operator ulong(CSteamID that)
```

#### Parameters

- **that**: [CSteamID](/docs/api/shared/steamapi/csteamid)

#### Returns

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### operator !=(CSteamID, CSteamID)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L454)

```csharp
public static bool operator !=(CSteamID x, CSteamID y)
```

#### Parameters

- **x**: [CSteamID](/docs/api/shared/steamapi/csteamid)
- **y**: [CSteamID](/docs/api/shared/steamapi/csteamid)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

