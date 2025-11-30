---
title: AmmoTypeInfo_t
---

# Interface AmmoTypeInfo_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AmmoTypeInfo_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface AmmoTypeInfo_t : ISchemaClass<AmmoTypeInfo_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<AmmoTypeInfo_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Flags

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AmmoTypeInfo_t.cs#L22)

```csharp
ref AmmoFlags_t Flags { get; }
```

#### Property Value

- [AmmoFlags_t](/docs/api/schemadefinitions/ammoflags_t)

### Mass

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AmmoTypeInfo_t.cs#L24)

```csharp
ref float Mass { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MaxCarry

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AmmoTypeInfo_t.cs#L18)

```csharp
ref int MaxCarry { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Speed

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AmmoTypeInfo_t.cs#L26)

```csharp
CRangeFloat Speed { get; }
```

#### Property Value

- [CRangeFloat](/docs/api/schemadefinitions/crangefloat)

### SplashSize

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AmmoTypeInfo_t.cs#L20)

```csharp
CRangeInt SplashSize { get; }
```

#### Property Value

- [CRangeInt](/docs/api/schemadefinitions/crangeint)

