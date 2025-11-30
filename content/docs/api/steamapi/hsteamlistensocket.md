---
title: HSteamListenSocket
---

# Struct HSteamListenSocket

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/HSteamListenSocket.cs#L5)

**Namespace**: [SwiftlyS2.Shared.SteamAPI](/docs/api/steamapi)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
[Serializable]
public struct HSteamListenSocket : IEquatable<HSteamListenSocket>, IComparable<HSteamListenSocket>
```

#### Implements

- [IEquatable<HSteamListenSocket>](https://learn.microsoft.com/dotnet/api/system.iequatable-1)
- [IComparable<HSteamListenSocket>](https://learn.microsoft.com/dotnet/api/system.icomparable-1)

#### Inherited Members

- [object.Equals(object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object))
- [object.Equals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))
- [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)
- [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)
- [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)
- [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### HSteamListenSocket(uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/HSteamListenSocket.cs#L10)

```csharp
public HSteamListenSocket(uint value)
```

#### Parameters

- **value**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

## Fields

### Invalid

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/HSteamListenSocket.cs#L7)

```csharp
public static readonly HSteamListenSocket Invalid
```

#### Field Value

- [HSteamListenSocket](/docs/api/steamapi/hsteamlistensocket)

### m_HSteamListenSocket

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/HSteamListenSocket.cs#L8)

```csharp
public uint m_HSteamListenSocket
```

#### Field Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

## Methods

### CompareTo(HSteamListenSocket)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/HSteamListenSocket.cs#L46)

Compares the current instance with another object of the same type and returns an integer that indicates whether the current instance precedes, follows, or occurs in the same position in the sort order as the other object.

```csharp
public int CompareTo(HSteamListenSocket other)
```

#### Parameters

- **other**: [HSteamListenSocket](/docs/api/steamapi/hsteamlistensocket) - An object to compare with this instance.

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - A value that indicates the relative order of the objects being compared. The return value has these meanings:

 <table><thead><tr><th class="term"> Value</th><th class="description"> Meaning</th></tr></thead><tbody><tr><td class="term"> Less than zero</td><td class="description"> This instance precedes <code class="paramref">other</code> in the sort order.</td></tr><tr><td class="term"> Zero</td><td class="description"> This instance occurs in the same position in the sort order as <code class="paramref">other</code>.</td></tr><tr><td class="term"> Greater than zero</td><td class="description"> This instance follows <code class="paramref">other</code> in the sort order.</td></tr></tbody></table>

### Equals(object)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/HSteamListenSocket.cs#L18)

Indicates whether this instance and a specified object are equal.

```csharp
public override bool Equals(object other)
```

#### Parameters

- **other**: [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if <code class="paramref">obj</code> and this instance are the same type and represent the same value; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### Equals(HSteamListenSocket)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/HSteamListenSocket.cs#L42)

Indicates whether the current object is equal to another object of the same type.

```csharp
public bool Equals(HSteamListenSocket other)
```

#### Parameters

- **other**: [HSteamListenSocket](/docs/api/steamapi/hsteamlistensocket) - An object to compare with this object.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if the current object is equal to the <code class="paramref">other</code> parameter; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### GetHashCode()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/HSteamListenSocket.cs#L22)

Returns the hash code for this instance.

```csharp
public override int GetHashCode()
```

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - A 32-bit signed integer that is the hash code for this instance.

### ToString()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/HSteamListenSocket.cs#L14)

Returns the fully qualified type name of this instance.

```csharp
public override string ToString()
```

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - The fully qualified type name.

## Operators

### operator ==(HSteamListenSocket, HSteamListenSocket)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/HSteamListenSocket.cs#L26)

```csharp
public static bool operator ==(HSteamListenSocket x, HSteamListenSocket y)
```

#### Parameters

- **x**: [HSteamListenSocket](/docs/api/steamapi/hsteamlistensocket)
- **y**: [HSteamListenSocket](/docs/api/steamapi/hsteamlistensocket)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### explicit operator HSteamListenSocket(uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/HSteamListenSocket.cs#L34)

```csharp
public static explicit operator HSteamListenSocket(uint value)
```

#### Parameters

- **value**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [HSteamListenSocket](/docs/api/steamapi/hsteamlistensocket)

### explicit operator uint(HSteamListenSocket)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/HSteamListenSocket.cs#L38)

```csharp
public static explicit operator uint(HSteamListenSocket that)
```

#### Parameters

- **that**: [HSteamListenSocket](/docs/api/steamapi/hsteamlistensocket)

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### operator !=(HSteamListenSocket, HSteamListenSocket)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/HSteamListenSocket.cs#L30)

```csharp
public static bool operator !=(HSteamListenSocket x, HSteamListenSocket y)
```

#### Parameters

- **x**: [HSteamListenSocket](/docs/api/steamapi/hsteamlistensocket)
- **y**: [HSteamListenSocket](/docs/api/steamapi/hsteamlistensocket)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

