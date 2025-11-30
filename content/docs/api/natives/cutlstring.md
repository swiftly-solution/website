---
title: CUtlString
---

# Struct CUtlString

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlString.cs#L7)

**Namespace**: [SwiftlyS2.Shared.Natives](/docs/api/natives)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public struct CUtlString
```

#### Inherited Members

- [object.Equals(object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object))
- [object.Equals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))
- [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)
- [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)
- [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)
- [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### Value

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlString.cs#L12)

```csharp
public string Value { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

## Operators

### implicit operator string(CUtlString)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlString.cs#L21)

```csharp
public static implicit operator string(CUtlString str)
```

#### Parameters

- **str**: [CUtlString](/docs/api/natives/cutlstring)

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### implicit operator CUtlString(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlString.cs#L22)

```csharp
public static implicit operator CUtlString(string str)
```

#### Parameters

- **str**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [CUtlString](/docs/api/natives/cutlstring)

