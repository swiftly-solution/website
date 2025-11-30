---
title: HServerListRequest
---

# Struct HServerListRequest

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamMatchmaking/HServerListRequest.cs#L5)

**Namespace**: [SwiftlyS2.Shared.SteamAPI](/docs/api/steamapi)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
[Serializable]
public struct HServerListRequest : IEquatable<HServerListRequest>
```

#### Implements

- [IEquatable<HServerListRequest>](https://learn.microsoft.com/dotnet/api/system.iequatable-1)

#### Inherited Members

- [object.Equals(object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object))
- [object.Equals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))
- [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)
- [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)
- [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)
- [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### HServerListRequest(nint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamMatchmaking/HServerListRequest.cs#L10)

```csharp
public HServerListRequest(nint value)
```

#### Parameters

- **value**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

## Fields

### Invalid

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamMatchmaking/HServerListRequest.cs#L7)

```csharp
public static readonly HServerListRequest Invalid
```

#### Field Value

- [HServerListRequest](/docs/api/steamapi/hserverlistrequest)

### m_HServerListRequest

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamMatchmaking/HServerListRequest.cs#L8)

```csharp
public nint m_HServerListRequest
```

#### Field Value

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

## Methods

### Equals(object)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamMatchmaking/HServerListRequest.cs#L18)

Indicates whether this instance and a specified object are equal.

```csharp
public override bool Equals(object other)
```

#### Parameters

- **other**: [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if <code class="paramref">obj</code> and this instance are the same type and represent the same value; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### Equals(HServerListRequest)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamMatchmaking/HServerListRequest.cs#L42)

Indicates whether the current object is equal to another object of the same type.

```csharp
public bool Equals(HServerListRequest other)
```

#### Parameters

- **other**: [HServerListRequest](/docs/api/steamapi/hserverlistrequest) - An object to compare with this object.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if the current object is equal to the <code class="paramref">other</code> parameter; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### GetHashCode()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamMatchmaking/HServerListRequest.cs#L22)

Returns the hash code for this instance.

```csharp
public override int GetHashCode()
```

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - A 32-bit signed integer that is the hash code for this instance.

### ToString()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamMatchmaking/HServerListRequest.cs#L14)

Returns the fully qualified type name of this instance.

```csharp
public override string ToString()
```

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - The fully qualified type name.

## Operators

### operator ==(HServerListRequest, HServerListRequest)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamMatchmaking/HServerListRequest.cs#L26)

```csharp
public static bool operator ==(HServerListRequest x, HServerListRequest y)
```

#### Parameters

- **x**: [HServerListRequest](/docs/api/steamapi/hserverlistrequest)
- **y**: [HServerListRequest](/docs/api/steamapi/hserverlistrequest)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### explicit operator HServerListRequest(nint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamMatchmaking/HServerListRequest.cs#L34)

```csharp
public static explicit operator HServerListRequest(nint value)
```

#### Parameters

- **value**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

#### Returns

- [HServerListRequest](/docs/api/steamapi/hserverlistrequest)

### explicit operator nint(HServerListRequest)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamMatchmaking/HServerListRequest.cs#L38)

```csharp
public static explicit operator nint(HServerListRequest that)
```

#### Parameters

- **that**: [HServerListRequest](/docs/api/steamapi/hserverlistrequest)

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### operator !=(HServerListRequest, HServerListRequest)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamMatchmaking/HServerListRequest.cs#L30)

```csharp
public static bool operator !=(HServerListRequest x, HServerListRequest y)
```

#### Parameters

- **x**: [HServerListRequest](/docs/api/steamapi/hserverlistrequest)
- **y**: [HServerListRequest](/docs/api/steamapi/hserverlistrequest)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

