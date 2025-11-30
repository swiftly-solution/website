---
title: Struct CGameID
---

# Struct CGameID

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CGameID.cs#L6)

**Namespace**: [SwiftlyS2.Shared.SteamAPI](/docs/api/steamapi)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
[Serializable]
public struct CGameID : IEquatable<CGameID>, IComparable<CGameID>
```

#### Implements

- [IEquatable<CGameID>](https://learn.microsoft.com/dotnet/api/system.iequatable-1)
- [IComparable<CGameID>](https://learn.microsoft.com/dotnet/api/system.icomparable-1)

#### Inherited Members

- [object.Equals(object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object))
- [object.Equals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))
- [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)
- [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)
- [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)
- [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### CGameID(ulong)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CGameID.cs#L19)

```csharp
public CGameID(ulong GameID)
```

#### Parameters

- **GameID**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### CGameID(AppId_t)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CGameID.cs#L24)

```csharp
public CGameID(AppId_t nAppID)
```

#### Parameters

- **nAppID**: [AppId_t](/docs/api/steamapi/appid_t)

### CGameID(AppId_t, uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CGameID.cs#L30)

```csharp
public CGameID(AppId_t nAppID, uint nModID)
```

#### Parameters

- **nAppID**: [AppId_t](/docs/api/steamapi/appid_t)
- **nModID**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

## Fields

### m_GameID

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CGameID.cs#L9)

```csharp
public ulong m_GameID
```

#### Field Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

## Methods

### AppID()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CGameID.cs#L58)

```csharp
public AppId_t AppID()
```

#### Returns

- [AppId_t](/docs/api/steamapi/appid_t)

### CompareTo(CGameID)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CGameID.cs#L162)

Compares the current instance with another object of the same type and returns an integer that indicates whether the current instance precedes, follows, or occurs in the same position in the sort order as the other object.

```csharp
public int CompareTo(CGameID other)
```

#### Parameters

- **other**: [CGameID](/docs/api/steamapi/cgameid) - An object to compare with this instance.

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - A value that indicates the relative order of the objects being compared. The return value has these meanings:

 <table><thead><tr><th class="term"> Value</th><th class="description"> Meaning</th></tr></thead><tbody><tr><td class="term"> Less than zero</td><td class="description"> This instance precedes <code class="paramref">other</code> in the sort order.</td></tr><tr><td class="term"> Zero</td><td class="description"> This instance occurs in the same position in the sort order as <code class="paramref">other</code>.</td></tr><tr><td class="term"> Greater than zero</td><td class="description"> This instance follows <code class="paramref">other</code> in the sort order.</td></tr></tbody></table>

### Equals(object)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CGameID.cs#L128)

Indicates whether this instance and a specified object are equal.

```csharp
public override bool Equals(object other)
```

#### Parameters

- **other**: [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if <code class="paramref">obj</code> and this instance are the same type and represent the same value; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### Equals(CGameID)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CGameID.cs#L157)

Indicates whether the current object is equal to another object of the same type.

```csharp
public bool Equals(CGameID other)
```

#### Parameters

- **other**: [CGameID](/docs/api/steamapi/cgameid) - An object to compare with this object.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if the current object is equal to the <code class="paramref">other</code> parameter; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### GetHashCode()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CGameID.cs#L133)

Returns the hash code for this instance.

```csharp
public override int GetHashCode()
```

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - A 32-bit signed integer that is the hash code for this instance.

### IsMod()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CGameID.cs#L43)

```csharp
public bool IsMod()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsP2PFile()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CGameID.cs#L53)

```csharp
public bool IsP2PFile()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsShortcut()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CGameID.cs#L48)

```csharp
public bool IsShortcut()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsSteamApp()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CGameID.cs#L38)

```csharp
public bool IsSteamApp()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsValid()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CGameID.cs#L73)

```csharp
public bool IsValid()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ModID()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CGameID.cs#L68)

```csharp
public uint ModID()
```

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Reset()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CGameID.cs#L95)

```csharp
public void Reset()
```

### Set(ulong)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CGameID.cs#L100)

```csharp
public void Set(ulong GameID)
```

#### Parameters

- **GameID**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### ToString()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CGameID.cs#L123)

Returns the fully qualified type name of this instance.

```csharp
public override string ToString()
```

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - The fully qualified type name.

### Type()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CGameID.cs#L63)

```csharp
public CGameID.EGameIDType Type()
```

#### Returns

- [CGameID](/docs/api/steamapi/cgameid).[EGameIDType](/docs/api/steamapi/cgameid/egameidtype)

## Operators

### operator ==(CGameID, CGameID)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CGameID.cs#L138)

```csharp
public static bool operator ==(CGameID x, CGameID y)
```

#### Parameters

- **x**: [CGameID](/docs/api/steamapi/cgameid)
- **y**: [CGameID](/docs/api/steamapi/cgameid)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### explicit operator CGameID(ulong)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CGameID.cs#L148)

```csharp
public static explicit operator CGameID(ulong value)
```

#### Parameters

- **value**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

#### Returns

- [CGameID](/docs/api/steamapi/cgameid)

### explicit operator ulong(CGameID)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CGameID.cs#L152)

```csharp
public static explicit operator ulong(CGameID that)
```

#### Parameters

- **that**: [CGameID](/docs/api/steamapi/cgameid)

#### Returns

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### operator !=(CGameID, CGameID)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/CGameID.cs#L143)

```csharp
public static bool operator !=(CGameID x, CGameID y)
```

#### Parameters

- **x**: [CGameID](/docs/api/steamapi/cgameid)
- **y**: [CGameID](/docs/api/steamapi/cgameid)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

