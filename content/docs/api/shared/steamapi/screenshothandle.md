---
title: ScreenshotHandle
---

```csharp
[Serializable]
public struct ScreenshotHandle : IEquatable<ScreenshotHandle>, IComparable<ScreenshotHandle>
```

#### Implements

#### Inherited Members

## Constructors

### ScreenshotHandle(uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamScreenshots/ScreenshotHandle.cs#L10)

```csharp
public ScreenshotHandle(uint value)
```

#### Parameters

- **value**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

## Fields

### Invalid

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamScreenshots/ScreenshotHandle.cs#L7)

```csharp
public static readonly ScreenshotHandle Invalid
```

#### Field Value

- [ScreenshotHandle](/docs/api/shared/steamapi/screenshothandle)

### m_ScreenshotHandle

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamScreenshots/ScreenshotHandle.cs#L8)

```csharp
public uint m_ScreenshotHandle
```

#### Field Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

## Methods

### CompareTo(ScreenshotHandle)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamScreenshots/ScreenshotHandle.cs#L46)

```csharp
public int CompareTo(ScreenshotHandle other)
```

#### Parameters

- **other**: [ScreenshotHandle](/docs/api/shared/steamapi/screenshothandle) - An object to compare with this instance.

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - A value that indicates the relative order of the objects being compared. The return value has these meanings:

 <table><thead><tr><th class="term"> Value</th><th class="description"> Meaning</th></tr></thead><tbody><tr><td class="term"> Less than zero</td><td class="description"> This instance precedes <code class="paramref">other</code> in the sort order.</td></tr><tr><td class="term"> Zero</td><td class="description"> This instance occurs in the same position in the sort order as <code class="paramref">other</code>.</td></tr><tr><td class="term"> Greater than zero</td><td class="description"> This instance follows <code class="paramref">other</code> in the sort order.</td></tr></tbody></table>

### Equals(object)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamScreenshots/ScreenshotHandle.cs#L18)

```csharp
public override bool Equals(object other)
```

#### Parameters

- **other**: [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if <code class="paramref">obj</code> and this instance are the same type and represent the same value; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### Equals(ScreenshotHandle)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamScreenshots/ScreenshotHandle.cs#L42)

```csharp
public bool Equals(ScreenshotHandle other)
```

#### Parameters

- **other**: [ScreenshotHandle](/docs/api/shared/steamapi/screenshothandle) - An object to compare with this object.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if the current object is equal to the <code class="paramref">other</code> parameter; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### GetHashCode()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamScreenshots/ScreenshotHandle.cs#L22)

```csharp
public override int GetHashCode()
```

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - A 32-bit signed integer that is the hash code for this instance.

### ToString()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamScreenshots/ScreenshotHandle.cs#L14)

```csharp
public override string ToString()
```

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - The fully qualified type name.

## Operators

### operator ==(ScreenshotHandle, ScreenshotHandle)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamScreenshots/ScreenshotHandle.cs#L26)

```csharp
public static bool operator ==(ScreenshotHandle x, ScreenshotHandle y)
```

#### Parameters

- **x**: [ScreenshotHandle](/docs/api/shared/steamapi/screenshothandle)
- **y**: [ScreenshotHandle](/docs/api/shared/steamapi/screenshothandle)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### explicit operator ScreenshotHandle(uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamScreenshots/ScreenshotHandle.cs#L34)

```csharp
public static explicit operator ScreenshotHandle(uint value)
```

#### Parameters

- **value**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [ScreenshotHandle](/docs/api/shared/steamapi/screenshothandle)

### explicit operator uint(ScreenshotHandle)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamScreenshots/ScreenshotHandle.cs#L38)

```csharp
public static explicit operator uint(ScreenshotHandle that)
```

#### Parameters

- **that**: [ScreenshotHandle](/docs/api/shared/steamapi/screenshothandle)

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### operator !=(ScreenshotHandle, ScreenshotHandle)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamScreenshots/ScreenshotHandle.cs#L30)

```csharp
public static bool operator !=(ScreenshotHandle x, ScreenshotHandle y)
```

#### Parameters

- **x**: [ScreenshotHandle](/docs/api/shared/steamapi/screenshothandle)
- **y**: [ScreenshotHandle](/docs/api/shared/steamapi/screenshothandle)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

