---
title: AmmoTypeInfo_t
---

```csharp
public interface AmmoTypeInfo_t : ISchemaClass<AmmoTypeInfo_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Flags

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AmmoTypeInfo_t.cs#L21)

```csharp
ref AmmoFlags_t Flags { get; }
```

#### Property Value

- [AmmoFlags_t](/docs/api/shared/schemadefinitions/ammoflags_t)

### Mass

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AmmoTypeInfo_t.cs#L23)

```csharp
ref float Mass { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MaxCarry

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AmmoTypeInfo_t.cs#L17)

```csharp
ref int MaxCarry { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Speed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AmmoTypeInfo_t.cs#L25)

```csharp
CRangeFloat Speed { get; }
```

#### Property Value

- [CRangeFloat](/docs/api/shared/schemadefinitions/crangefloat)

### SplashSize

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AmmoTypeInfo_t.cs#L19)

```csharp
CRangeInt SplashSize { get; }
```

#### Property Value

- [CRangeInt](/docs/api/shared/schemadefinitions/crangeint)

