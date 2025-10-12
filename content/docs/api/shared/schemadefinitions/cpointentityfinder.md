---
title: CPointEntityFinder
---

```csharp
public interface CPointEntityFinder : CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CPointEntityFinder>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Entity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointEntityFinder.cs#L16)

```csharp
ref CHandle<CBaseEntity> Entity { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### Filter

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointEntityFinder.cs#L20)

```csharp
ref CHandle<CBaseFilter> Filter { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseFilter](/docs/api/shared/schemadefinitions/cbasefilter)>

### FilterName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointEntityFinder.cs#L18)

```csharp
string FilterName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### FindMethod

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointEntityFinder.cs#L26)

```csharp
ref EntFinderMethod_t FindMethod { get; }
```

#### Property Value

- [EntFinderMethod_t](/docs/api/shared/schemadefinitions/entfindermethod_t)

### OnFoundEntity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointEntityFinder.cs#L28)

```csharp
CEntityIOOutput OnFoundEntity { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### RefName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointEntityFinder.cs#L22)

```csharp
string RefName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Reference

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointEntityFinder.cs#L24)

```csharp
ref CHandle<CBaseEntity> Reference { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

