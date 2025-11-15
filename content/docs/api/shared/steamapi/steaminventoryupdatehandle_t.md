---
title: SteamInventoryUpdateHandle_t
---

```csharp
[Serializable]
public struct SteamInventoryUpdateHandle_t : IEquatable<SteamInventoryUpdateHandle_t>, IComparable<SteamInventoryUpdateHandle_t>
```

#### Implements

#### Inherited Members

## Constructors

### SteamInventoryUpdateHandle_t(ulong)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamInventory/SteamInventoryUpdateHandle_t.cs#L10)

```csharp
public SteamInventoryUpdateHandle_t(ulong value)
```

#### Parameters

- **value**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

## Fields

### Invalid

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamInventory/SteamInventoryUpdateHandle_t.cs#L7)

```csharp
public static readonly SteamInventoryUpdateHandle_t Invalid
```

#### Field Value

- [SteamInventoryUpdateHandle_t](/docs/api/shared/steamapi/steaminventoryupdatehandle_t)

### m_SteamInventoryUpdateHandle

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamInventory/SteamInventoryUpdateHandle_t.cs#L8)

```csharp
public ulong m_SteamInventoryUpdateHandle
```

#### Field Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

## Methods

### CompareTo(SteamInventoryUpdateHandle_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamInventory/SteamInventoryUpdateHandle_t.cs#L46)

```csharp
public int CompareTo(SteamInventoryUpdateHandle_t other)
```

#### Parameters

- **other**: [SteamInventoryUpdateHandle_t](/docs/api/shared/steamapi/steaminventoryupdatehandle_t) - An object to compare with this instance.

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - A value that indicates the relative order of the objects being compared. The return value has these meanings:

 <table><thead><tr><th class="term"> Value</th><th class="description"> Meaning</th></tr></thead><tbody><tr><td class="term"> Less than zero</td><td class="description"> This instance precedes <code class="paramref">other</code> in the sort order.</td></tr><tr><td class="term"> Zero</td><td class="description"> This instance occurs in the same position in the sort order as <code class="paramref">other</code>.</td></tr><tr><td class="term"> Greater than zero</td><td class="description"> This instance follows <code class="paramref">other</code> in the sort order.</td></tr></tbody></table>

### Equals(object)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamInventory/SteamInventoryUpdateHandle_t.cs#L18)

```csharp
public override bool Equals(object other)
```

#### Parameters

- **other**: [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if <code class="paramref">obj</code> and this instance are the same type and represent the same value; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### Equals(SteamInventoryUpdateHandle_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamInventory/SteamInventoryUpdateHandle_t.cs#L42)

```csharp
public bool Equals(SteamInventoryUpdateHandle_t other)
```

#### Parameters

- **other**: [SteamInventoryUpdateHandle_t](/docs/api/shared/steamapi/steaminventoryupdatehandle_t) - An object to compare with this object.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if the current object is equal to the <code class="paramref">other</code> parameter; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### GetHashCode()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamInventory/SteamInventoryUpdateHandle_t.cs#L22)

```csharp
public override int GetHashCode()
```

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - A 32-bit signed integer that is the hash code for this instance.

### ToString()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamInventory/SteamInventoryUpdateHandle_t.cs#L14)

```csharp
public override string ToString()
```

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - The fully qualified type name.

## Operators

### operator ==(SteamInventoryUpdateHandle_t, SteamInventoryUpdateHandle_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamInventory/SteamInventoryUpdateHandle_t.cs#L26)

```csharp
public static bool operator ==(SteamInventoryUpdateHandle_t x, SteamInventoryUpdateHandle_t y)
```

#### Parameters

- **x**: [SteamInventoryUpdateHandle_t](/docs/api/shared/steamapi/steaminventoryupdatehandle_t)
- **y**: [SteamInventoryUpdateHandle_t](/docs/api/shared/steamapi/steaminventoryupdatehandle_t)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### explicit operator SteamInventoryUpdateHandle_t(ulong)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamInventory/SteamInventoryUpdateHandle_t.cs#L34)

```csharp
public static explicit operator SteamInventoryUpdateHandle_t(ulong value)
```

#### Parameters

- **value**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

#### Returns

- [SteamInventoryUpdateHandle_t](/docs/api/shared/steamapi/steaminventoryupdatehandle_t)

### explicit operator ulong(SteamInventoryUpdateHandle_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamInventory/SteamInventoryUpdateHandle_t.cs#L38)

```csharp
public static explicit operator ulong(SteamInventoryUpdateHandle_t that)
```

#### Parameters

- **that**: [SteamInventoryUpdateHandle_t](/docs/api/shared/steamapi/steaminventoryupdatehandle_t)

#### Returns

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### operator !=(SteamInventoryUpdateHandle_t, SteamInventoryUpdateHandle_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamInventory/SteamInventoryUpdateHandle_t.cs#L30)

```csharp
public static bool operator !=(SteamInventoryUpdateHandle_t x, SteamInventoryUpdateHandle_t y)
```

#### Parameters

- **x**: [SteamInventoryUpdateHandle_t](/docs/api/shared/steamapi/steaminventoryupdatehandle_t)
- **y**: [SteamInventoryUpdateHandle_t](/docs/api/shared/steamapi/steaminventoryupdatehandle_t)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

