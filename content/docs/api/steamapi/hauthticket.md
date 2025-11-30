---
title: HAuthTicket
---

# Struct HAuthTicket

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/HAuthTicket.cs#L5)

**Namespace**: [SwiftlyS2.Shared.SteamAPI](/docs/api/steamapi)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
[Serializable]
public struct HAuthTicket : IEquatable<HAuthTicket>, IComparable<HAuthTicket>
```

#### Implements

- [IEquatable<HAuthTicket>](https://learn.microsoft.com/dotnet/api/system.iequatable-1)
- [IComparable<HAuthTicket>](https://learn.microsoft.com/dotnet/api/system.icomparable-1)

#### Inherited Members

- [object.Equals(object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object))
- [object.Equals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))
- [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)
- [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)
- [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)
- [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### HAuthTicket(uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/HAuthTicket.cs#L10)

```csharp
public HAuthTicket(uint value)
```

#### Parameters

- **value**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

## Fields

### Invalid

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/HAuthTicket.cs#L7)

```csharp
public static readonly HAuthTicket Invalid
```

#### Field Value

- [HAuthTicket](/docs/api/steamapi/hauthticket)

### m_HAuthTicket

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/HAuthTicket.cs#L8)

```csharp
public uint m_HAuthTicket
```

#### Field Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

## Methods

### CompareTo(HAuthTicket)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/HAuthTicket.cs#L46)

Compares the current instance with another object of the same type and returns an integer that indicates whether the current instance precedes, follows, or occurs in the same position in the sort order as the other object.

```csharp
public int CompareTo(HAuthTicket other)
```

#### Parameters

- **other**: [HAuthTicket](/docs/api/steamapi/hauthticket) - An object to compare with this instance.

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - A value that indicates the relative order of the objects being compared. The return value has these meanings:

 <table><thead><tr><th class="term"> Value</th><th class="description"> Meaning</th></tr></thead><tbody><tr><td class="term"> Less than zero</td><td class="description"> This instance precedes <code class="paramref">other</code> in the sort order.</td></tr><tr><td class="term"> Zero</td><td class="description"> This instance occurs in the same position in the sort order as <code class="paramref">other</code>.</td></tr><tr><td class="term"> Greater than zero</td><td class="description"> This instance follows <code class="paramref">other</code> in the sort order.</td></tr></tbody></table>

### Equals(object)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/HAuthTicket.cs#L18)

Indicates whether this instance and a specified object are equal.

```csharp
public override bool Equals(object other)
```

#### Parameters

- **other**: [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if <code class="paramref">obj</code> and this instance are the same type and represent the same value; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### Equals(HAuthTicket)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/HAuthTicket.cs#L42)

Indicates whether the current object is equal to another object of the same type.

```csharp
public bool Equals(HAuthTicket other)
```

#### Parameters

- **other**: [HAuthTicket](/docs/api/steamapi/hauthticket) - An object to compare with this object.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if the current object is equal to the <code class="paramref">other</code> parameter; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### GetHashCode()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/HAuthTicket.cs#L22)

Returns the hash code for this instance.

```csharp
public override int GetHashCode()
```

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - A 32-bit signed integer that is the hash code for this instance.

### ToString()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/HAuthTicket.cs#L14)

Returns the fully qualified type name of this instance.

```csharp
public override string ToString()
```

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - The fully qualified type name.

## Operators

### operator ==(HAuthTicket, HAuthTicket)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/HAuthTicket.cs#L26)

```csharp
public static bool operator ==(HAuthTicket x, HAuthTicket y)
```

#### Parameters

- **x**: [HAuthTicket](/docs/api/steamapi/hauthticket)
- **y**: [HAuthTicket](/docs/api/steamapi/hauthticket)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### explicit operator HAuthTicket(uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/HAuthTicket.cs#L34)

```csharp
public static explicit operator HAuthTicket(uint value)
```

#### Parameters

- **value**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [HAuthTicket](/docs/api/steamapi/hauthticket)

### explicit operator uint(HAuthTicket)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/HAuthTicket.cs#L38)

```csharp
public static explicit operator uint(HAuthTicket that)
```

#### Parameters

- **that**: [HAuthTicket](/docs/api/steamapi/hauthticket)

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### operator !=(HAuthTicket, HAuthTicket)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamClientPublic/HAuthTicket.cs#L30)

```csharp
public static bool operator !=(HAuthTicket x, HAuthTicket y)
```

#### Parameters

- **x**: [HAuthTicket](/docs/api/steamapi/hauthticket)
- **y**: [HAuthTicket](/docs/api/steamapi/hauthticket)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

