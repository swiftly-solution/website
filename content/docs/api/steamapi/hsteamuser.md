---
title: HSteamUser
---

# Struct HSteamUser

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/Steam_api_common/HSteamUser.cs#L5)

**Namespace**: [SwiftlyS2.Shared.SteamAPI](/docs/api/steamapi)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
[Serializable]
public struct HSteamUser : IEquatable<HSteamUser>, IComparable<HSteamUser>
```

#### Implements

- [IEquatable<HSteamUser>](https://learn.microsoft.com/dotnet/api/system.iequatable-1)
- [IComparable<HSteamUser>](https://learn.microsoft.com/dotnet/api/system.icomparable-1)

#### Inherited Members

- [object.Equals(object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object))
- [object.Equals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))
- [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)
- [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)
- [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)
- [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### HSteamUser(int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/Steam_api_common/HSteamUser.cs#L9)

```csharp
public HSteamUser(int value)
```

#### Parameters

- **value**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Fields

### m_HSteamUser

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/Steam_api_common/HSteamUser.cs#L7)

```csharp
public int m_HSteamUser
```

#### Field Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### CompareTo(HSteamUser)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/Steam_api_common/HSteamUser.cs#L45)

Compares the current instance with another object of the same type and returns an integer that indicates whether the current instance precedes, follows, or occurs in the same position in the sort order as the other object.

```csharp
public int CompareTo(HSteamUser other)
```

#### Parameters

- **other**: [HSteamUser](/docs/api/steamapi/hsteamuser) - An object to compare with this instance.

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - A value that indicates the relative order of the objects being compared. The return value has these meanings:

 <table><thead><tr><th class="term"> Value</th><th class="description"> Meaning</th></tr></thead><tbody><tr><td class="term"> Less than zero</td><td class="description"> This instance precedes <code class="paramref">other</code> in the sort order.</td></tr><tr><td class="term"> Zero</td><td class="description"> This instance occurs in the same position in the sort order as <code class="paramref">other</code>.</td></tr><tr><td class="term"> Greater than zero</td><td class="description"> This instance follows <code class="paramref">other</code> in the sort order.</td></tr></tbody></table>

### Equals(object)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/Steam_api_common/HSteamUser.cs#L17)

Indicates whether this instance and a specified object are equal.

```csharp
public override bool Equals(object other)
```

#### Parameters

- **other**: [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if <code class="paramref">obj</code> and this instance are the same type and represent the same value; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### Equals(HSteamUser)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/Steam_api_common/HSteamUser.cs#L41)

Indicates whether the current object is equal to another object of the same type.

```csharp
public bool Equals(HSteamUser other)
```

#### Parameters

- **other**: [HSteamUser](/docs/api/steamapi/hsteamuser) - An object to compare with this object.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if the current object is equal to the <code class="paramref">other</code> parameter; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### GetHashCode()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/Steam_api_common/HSteamUser.cs#L21)

Returns the hash code for this instance.

```csharp
public override int GetHashCode()
```

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - A 32-bit signed integer that is the hash code for this instance.

### ToString()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/Steam_api_common/HSteamUser.cs#L13)

Returns the fully qualified type name of this instance.

```csharp
public override string ToString()
```

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - The fully qualified type name.

## Operators

### operator ==(HSteamUser, HSteamUser)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/Steam_api_common/HSteamUser.cs#L25)

```csharp
public static bool operator ==(HSteamUser x, HSteamUser y)
```

#### Parameters

- **x**: [HSteamUser](/docs/api/steamapi/hsteamuser)
- **y**: [HSteamUser](/docs/api/steamapi/hsteamuser)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### explicit operator HSteamUser(int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/Steam_api_common/HSteamUser.cs#L33)

```csharp
public static explicit operator HSteamUser(int value)
```

#### Parameters

- **value**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

- [HSteamUser](/docs/api/steamapi/hsteamuser)

### explicit operator int(HSteamUser)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/Steam_api_common/HSteamUser.cs#L37)

```csharp
public static explicit operator int(HSteamUser that)
```

#### Parameters

- **that**: [HSteamUser](/docs/api/steamapi/hsteamuser)

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### operator !=(HSteamUser, HSteamUser)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/Steam_api_common/HSteamUser.cs#L29)

```csharp
public static bool operator !=(HSteamUser x, HSteamUser y)
```

#### Parameters

- **x**: [HSteamUser](/docs/api/steamapi/hsteamuser)
- **y**: [HSteamUser](/docs/api/steamapi/hsteamuser)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

