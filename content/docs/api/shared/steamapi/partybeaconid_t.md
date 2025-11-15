---
title: PartyBeaconID_t
---

```csharp
[Serializable]
public struct PartyBeaconID_t : IEquatable<PartyBeaconID_t>, IComparable<PartyBeaconID_t>
```

#### Implements

#### Inherited Members

## Constructors

### PartyBeaconID_t(ulong)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamTypes/PartyBeaconID_t.cs#L10)

```csharp
public PartyBeaconID_t(ulong value)
```

#### Parameters

- **value**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

## Fields

### Invalid

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamTypes/PartyBeaconID_t.cs#L7)

```csharp
public static readonly PartyBeaconID_t Invalid
```

#### Field Value

- [PartyBeaconID_t](/docs/api/shared/steamapi/partybeaconid_t)

### m_PartyBeaconID

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamTypes/PartyBeaconID_t.cs#L8)

```csharp
public ulong m_PartyBeaconID
```

#### Field Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

## Methods

### CompareTo(PartyBeaconID_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamTypes/PartyBeaconID_t.cs#L46)

```csharp
public int CompareTo(PartyBeaconID_t other)
```

#### Parameters

- **other**: [PartyBeaconID_t](/docs/api/shared/steamapi/partybeaconid_t) - An object to compare with this instance.

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - A value that indicates the relative order of the objects being compared. The return value has these meanings:

 <table><thead><tr><th class="term"> Value</th><th class="description"> Meaning</th></tr></thead><tbody><tr><td class="term"> Less than zero</td><td class="description"> This instance precedes <code class="paramref">other</code> in the sort order.</td></tr><tr><td class="term"> Zero</td><td class="description"> This instance occurs in the same position in the sort order as <code class="paramref">other</code>.</td></tr><tr><td class="term"> Greater than zero</td><td class="description"> This instance follows <code class="paramref">other</code> in the sort order.</td></tr></tbody></table>

### Equals(object)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamTypes/PartyBeaconID_t.cs#L18)

```csharp
public override bool Equals(object other)
```

#### Parameters

- **other**: [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if <code class="paramref">obj</code> and this instance are the same type and represent the same value; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### Equals(PartyBeaconID_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamTypes/PartyBeaconID_t.cs#L42)

```csharp
public bool Equals(PartyBeaconID_t other)
```

#### Parameters

- **other**: [PartyBeaconID_t](/docs/api/shared/steamapi/partybeaconid_t) - An object to compare with this object.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if the current object is equal to the <code class="paramref">other</code> parameter; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### GetHashCode()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamTypes/PartyBeaconID_t.cs#L22)

```csharp
public override int GetHashCode()
```

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - A 32-bit signed integer that is the hash code for this instance.

### ToString()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamTypes/PartyBeaconID_t.cs#L14)

```csharp
public override string ToString()
```

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - The fully qualified type name.

## Operators

### operator ==(PartyBeaconID_t, PartyBeaconID_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamTypes/PartyBeaconID_t.cs#L26)

```csharp
public static bool operator ==(PartyBeaconID_t x, PartyBeaconID_t y)
```

#### Parameters

- **x**: [PartyBeaconID_t](/docs/api/shared/steamapi/partybeaconid_t)
- **y**: [PartyBeaconID_t](/docs/api/shared/steamapi/partybeaconid_t)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### explicit operator PartyBeaconID_t(ulong)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamTypes/PartyBeaconID_t.cs#L34)

```csharp
public static explicit operator PartyBeaconID_t(ulong value)
```

#### Parameters

- **value**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

#### Returns

- [PartyBeaconID_t](/docs/api/shared/steamapi/partybeaconid_t)

### explicit operator ulong(PartyBeaconID_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamTypes/PartyBeaconID_t.cs#L38)

```csharp
public static explicit operator ulong(PartyBeaconID_t that)
```

#### Parameters

- **that**: [PartyBeaconID_t](/docs/api/shared/steamapi/partybeaconid_t)

#### Returns

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### operator !=(PartyBeaconID_t, PartyBeaconID_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamTypes/PartyBeaconID_t.cs#L30)

```csharp
public static bool operator !=(PartyBeaconID_t x, PartyBeaconID_t y)
```

#### Parameters

- **x**: [PartyBeaconID_t](/docs/api/shared/steamapi/partybeaconid_t)
- **y**: [PartyBeaconID_t](/docs/api/shared/steamapi/partybeaconid_t)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

