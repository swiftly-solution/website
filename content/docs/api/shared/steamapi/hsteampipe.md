---
title: HSteamPipe
---

```csharp
[Serializable]
public struct HSteamPipe : IEquatable<HSteamPipe>, IComparable<HSteamPipe>
```

#### Implements

#### Inherited Members

## Constructors

### HSteamPipe(int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/Steam_api_common/HSteamPipe.cs#L9)

```csharp
public HSteamPipe(int value)
```

#### Parameters

- **value**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Fields

### m_HSteamPipe

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/Steam_api_common/HSteamPipe.cs#L7)

```csharp
public int m_HSteamPipe
```

#### Field Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### CompareTo(HSteamPipe)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/Steam_api_common/HSteamPipe.cs#L45)

```csharp
public int CompareTo(HSteamPipe other)
```

#### Parameters

- **other**: [HSteamPipe](/docs/api/shared/steamapi/hsteampipe) - An object to compare with this instance.

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - A value that indicates the relative order of the objects being compared. The return value has these meanings:  

 <table><thead><tr><th class="term"> Value</th><th class="description"> Meaning</th></tr></thead><tbody><tr><td class="term"> Less than zero</td><td class="description"> This instance precedes <code class="paramref">other</code> in the sort order.</td></tr><tr><td class="term"> Zero</td><td class="description"> This instance occurs in the same position in the sort order as <code class="paramref">other</code>.</td></tr><tr><td class="term"> Greater than zero</td><td class="description"> This instance follows <code class="paramref">other</code> in the sort order.</td></tr></tbody></table>

### Equals(object)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/Steam_api_common/HSteamPipe.cs#L17)

```csharp
public override bool Equals(object other)
```

#### Parameters

- **other**: [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if <code class="paramref">obj</code> and this instance are the same type and represent the same value; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### Equals(HSteamPipe)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/Steam_api_common/HSteamPipe.cs#L41)

```csharp
public bool Equals(HSteamPipe other)
```

#### Parameters

- **other**: [HSteamPipe](/docs/api/shared/steamapi/hsteampipe) - An object to compare with this object.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if the current object is equal to the <code class="paramref">other</code> parameter; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### GetHashCode()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/Steam_api_common/HSteamPipe.cs#L21)

```csharp
public override int GetHashCode()
```

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - A 32-bit signed integer that is the hash code for this instance.

### ToString()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/Steam_api_common/HSteamPipe.cs#L13)

```csharp
public override string ToString()
```

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - The fully qualified type name.

## Operators

### operator ==(HSteamPipe, HSteamPipe)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/Steam_api_common/HSteamPipe.cs#L25)

```csharp
public static bool operator ==(HSteamPipe x, HSteamPipe y)
```

#### Parameters

- **x**: [HSteamPipe](/docs/api/shared/steamapi/hsteampipe)
- **y**: [HSteamPipe](/docs/api/shared/steamapi/hsteampipe)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### explicit operator HSteamPipe(int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/Steam_api_common/HSteamPipe.cs#L33)

```csharp
public static explicit operator HSteamPipe(int value)
```

#### Parameters

- **value**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

- [HSteamPipe](/docs/api/shared/steamapi/hsteampipe)

### explicit operator int(HSteamPipe)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/Steam_api_common/HSteamPipe.cs#L37)

```csharp
public static explicit operator int(HSteamPipe that)
```

#### Parameters

- **that**: [HSteamPipe](/docs/api/shared/steamapi/hsteampipe)

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### operator !=(HSteamPipe, HSteamPipe)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/Steam_api_common/HSteamPipe.cs#L29)

```csharp
public static bool operator !=(HSteamPipe x, HSteamPipe y)
```

#### Parameters

- **x**: [HSteamPipe](/docs/api/shared/steamapi/hsteampipe)
- **y**: [HSteamPipe](/docs/api/shared/steamapi/hsteampipe)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

