---
title: CSteamID
---

# Struct CSteamID

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L155)

**Namespace**: [SwiftlyS2.Shared.SteamAPI](/docs/api/steamapi)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
[Serializable]
public struct CSteamID : IEquatable<CSteamID>, IComparable<CSteamID>
```

#### Implements

- [IEquatable<CSteamID>](https://learn.microsoft.com/dotnet/api/system.iequatable-1)
- [IComparable<CSteamID>](https://learn.microsoft.com/dotnet/api/system.icomparable-1)

#### Inherited Members

- [object.Equals(object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object))
- [object.Equals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))
- [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)
- [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)
- [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)
- [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### CSteamID(AccountID_t, EUniverse, EAccountType)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L166)

```csharp
public CSteamID(AccountID_t unAccountID, EUniverse eUniverse, EAccountType eAccountType)
```

#### Parameters

- **unAccountID**: [AccountID_t](/docs/api/steamapi/accountid_t)
- **eUniverse**: [EUniverse](/docs/api/steamapi/euniverse)
- **eAccountType**: [EAccountType](/docs/api/steamapi/eaccounttype)

### CSteamID(AccountID_t, uint, EUniverse, EAccountType)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L172)

```csharp
public CSteamID(AccountID_t unAccountID, uint unAccountInstance, EUniverse eUniverse, EAccountType eAccountType)
```

#### Parameters

- **unAccountID**: [AccountID_t](/docs/api/steamapi/accountid_t)
- **unAccountInstance**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **eUniverse**: [EUniverse](/docs/api/steamapi/euniverse)
- **eAccountType**: [EAccountType](/docs/api/steamapi/eaccounttype)

### CSteamID(ulong)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L181)

```csharp
public CSteamID(ulong ulSteamID)
```

#### Parameters

- **ulSteamID**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### CSteamID(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L186)

```csharp
public CSteamID(string sSteamID)
```

#### Parameters

- **sSteamID**: [string](https://learn.microsoft.com/dotnet/api/system.string)

## Fields

### LanModeGS

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L161)

```csharp
public static readonly CSteamID LanModeGS
```

#### Field Value

- [CSteamID](/docs/api/steamapi/csteamid)

### Nil

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L159)

```csharp
public static readonly CSteamID Nil
```

#### Field Value

- [CSteamID](/docs/api/steamapi/csteamid)

### NonSteamGS

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L163)

```csharp
public static readonly CSteamID NonSteamGS
```

#### Field Value

- [CSteamID](/docs/api/steamapi/csteamid)

### NotInitYetGS

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L162)

```csharp
public static readonly CSteamID NotInitYetGS
```

#### Field Value

- [CSteamID](/docs/api/steamapi/csteamid)

### OutofDateGS

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L160)

```csharp
public static readonly CSteamID OutofDateGS
```

#### Field Value

- [CSteamID](/docs/api/steamapi/csteamid)

### m_SteamID

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L164)

```csharp
public ulong m_SteamID
```

#### Field Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

## Methods

### BAnonAccount()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L316)

```csharp
public bool BAnonAccount()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BAnonGameServerAccount()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L263)

```csharp
public bool BAnonGameServerAccount()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BAnonUserAccount()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L324)

```csharp
public bool BAnonUserAccount()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BBlankAnonAccount()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L239)

```csharp
public bool BBlankAnonAccount()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BChatAccount()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L289)

```csharp
public bool BChatAccount()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BClanAccount()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L280)

```csharp
public bool BClanAccount()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BConsoleUserAccount()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L332)

```csharp
public bool BConsoleUserAccount()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BContentServerAccount()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L271)

```csharp
public bool BContentServerAccount()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BGameServerAccount()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L247)

```csharp
public bool BGameServerAccount()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BIndividualAccount()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L307)

```csharp
public bool BIndividualAccount()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BPersistentGameServerAccount()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L255)

```csharp
public bool BPersistentGameServerAccount()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Clear()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L215)

```csharp
public void Clear()
```

### CompareTo(CSteamID)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L473)

Compares the current instance with another object of the same type and returns an integer that indicates whether the current instance precedes, follows, or occurs in the same position in the sort order as the other object.

```csharp
public int CompareTo(CSteamID other)
```

#### Parameters

- **other**: [CSteamID](/docs/api/steamapi/csteamid) - An object to compare with this instance.

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - A value that indicates the relative order of the objects being compared. The return value has these meanings:

 <table><thead><tr><th class="term"> Value</th><th class="description"> Meaning</th></tr></thead><tbody><tr><td class="term"> Less than zero</td><td class="description"> This instance precedes <code class="paramref">other</code> in the sort order.</td></tr><tr><td class="term"> Zero</td><td class="description"> This instance occurs in the same position in the sort order as <code class="paramref">other</code>.</td></tr><tr><td class="term"> Greater than zero</td><td class="description"> This instance follows <code class="paramref">other</code> in the sort order.</td></tr></tbody></table>

### CreateBlankAnonLogon(EUniverse)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L220)

```csharp
public void CreateBlankAnonLogon(EUniverse eUniverse)
```

#### Parameters

- **eUniverse**: [EUniverse](/docs/api/steamapi/euniverse)

### CreateBlankAnonUserLogon(EUniverse)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L228)

```csharp
public void CreateBlankAnonUserLogon(EUniverse eUniverse)
```

#### Parameters

- **eUniverse**: [EUniverse](/docs/api/steamapi/euniverse)

### Equals(object)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L439)

Indicates whether this instance and a specified object are equal.

```csharp
public override bool Equals(object other)
```

#### Parameters

- **other**: [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if <code class="paramref">obj</code> and this instance are the same type and represent the same value; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### Equals(CSteamID)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L468)

Indicates whether the current object is equal to another object of the same type.

```csharp
public bool Equals(CSteamID other)
```

#### Parameters

- **other**: [CSteamID](/docs/api/steamapi/csteamid) - An object to compare with this object.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if the current object is equal to the <code class="paramref">other</code> parameter; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### GetAccountID()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L358)

```csharp
public AccountID_t GetAccountID()
```

#### Returns

- [AccountID_t](/docs/api/steamapi/accountid_t)

### GetEAccountType()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L368)

```csharp
public EAccountType GetEAccountType()
```

#### Returns

- [EAccountType](/docs/api/steamapi/eaccounttype)

### GetEUniverse()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L373)

```csharp
public EUniverse GetEUniverse()
```

#### Returns

- [EUniverse](/docs/api/steamapi/euniverse)

### GetHashCode()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L444)

Returns the hash code for this instance.

```csharp
public override int GetHashCode()
```

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - A 32-bit signed integer that is the hash code for this instance.

### GetSteamID()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L413)

```csharp
public string GetSteamID()
```

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### GetSteamID3()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L418)

```csharp
public string GetSteamID3()
```

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### GetSteamID32()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L423)

```csharp
public uint GetSteamID32()
```

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### GetSteamID64()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L408)

```csharp
public ulong GetSteamID64()
```

#### Returns

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### GetSteamIDOnline()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L428)

```csharp
public string GetSteamIDOnline()
```

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### GetUnAccountInstance()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L363)

```csharp
public uint GetUnAccountInstance()
```

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### InstancedSet(AccountID_t, uint, EUniverse, EAccountType)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L207)

```csharp
public void InstancedSet(AccountID_t unAccountID, uint unInstance, EUniverse eUniverse, EAccountType eAccountType)
```

#### Parameters

- **unAccountID**: [AccountID_t](/docs/api/steamapi/accountid_t)
- **unInstance**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **eUniverse**: [EUniverse](/docs/api/steamapi/euniverse)
- **eAccountType**: [EAccountType](/docs/api/steamapi/eaccounttype)

### IsLobby()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L297)

```csharp
public bool IsLobby()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsValid()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L379)

```csharp
public bool IsValid()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Set(AccountID_t, EUniverse, EAccountType)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L191)

```csharp
public void Set(AccountID_t unAccountID, EUniverse eUniverse, EAccountType eAccountType)
```

#### Parameters

- **unAccountID**: [AccountID_t](/docs/api/steamapi/accountid_t)
- **eUniverse**: [EUniverse](/docs/api/steamapi/euniverse)
- **eAccountType**: [EAccountType](/docs/api/steamapi/eaccounttype)

### SetAccountID(AccountID_t)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L337)

```csharp
public void SetAccountID(AccountID_t other)
```

#### Parameters

- **other**: [AccountID_t](/docs/api/steamapi/accountid_t)

### SetAccountInstance(uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L342)

```csharp
public void SetAccountInstance(uint other)
```

#### Parameters

- **other**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### SetEAccountType(EAccountType)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L348)

```csharp
public void SetEAccountType(EAccountType other)
```

#### Parameters

- **other**: [EAccountType](/docs/api/steamapi/eaccounttype)

### SetEUniverse(EUniverse)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L353)

```csharp
public void SetEUniverse(EUniverse other)
```

#### Parameters

- **other**: [EUniverse](/docs/api/steamapi/euniverse)

### ToString()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L434)

Returns the fully qualified type name of this instance.

```csharp
public override string ToString()
```

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - The fully qualified type name.

## Operators

### operator ==(CSteamID, CSteamID)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L449)

```csharp
public static bool operator ==(CSteamID x, CSteamID y)
```

#### Parameters

- **x**: [CSteamID](/docs/api/steamapi/csteamid)
- **y**: [CSteamID](/docs/api/steamapi/csteamid)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### explicit operator CSteamID(ulong)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L459)

```csharp
public static explicit operator CSteamID(ulong value)
```

#### Parameters

- **value**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

#### Returns

- [CSteamID](/docs/api/steamapi/csteamid)

### explicit operator ulong(CSteamID)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L463)

```csharp
public static explicit operator ulong(CSteamID that)
```

#### Parameters

- **that**: [CSteamID](/docs/api/steamapi/csteamid)

#### Returns

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### operator !=(CSteamID, CSteamID)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CSteamID.cs#L454)

```csharp
public static bool operator !=(CSteamID x, CSteamID y)
```

#### Parameters

- **x**: [CSteamID](/docs/api/steamapi/csteamid)
- **y**: [CSteamID](/docs/api/steamapi/csteamid)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

