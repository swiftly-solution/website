---
title: CFilterMultiple
---

```csharp
public interface CFilterMultiple : CBaseFilter, CLogicalEntity, CServerOnlyEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CServerOnlyEntity>, ISchemaClass<CLogicalEntity>, ISchemaClass<CBaseFilter>, ISchemaClass<CFilterMultiple>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Filter

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFilterMultiple.cs#L21)

```csharp
ISchemaFixedArray<CHandle<CBaseEntity>> Filter { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>>

### FilterName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFilterMultiple.cs#L19)

```csharp
string FilterName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### FilterType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFilterMultiple.cs#L17)

```csharp
ref filter_t FilterType { get; }
```

#### Property Value

- [filter_t](/docs/api/shared/schemadefinitions/filter_t)

