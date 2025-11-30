---
title: CTriggerBuoyancy
---

# Interface CTriggerBuoyancy

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerBuoyancy.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CTriggerBuoyancy : CBaseTrigger, CBaseToggle, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseToggle>, ISchemaClass<CBaseTrigger>, ISchemaClass<CTriggerBuoyancy>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CBaseTrigger](/docs/api/schemadefinitions/cbasetrigger)
- [CBaseToggle](/docs/api/schemadefinitions/cbasetoggle)
- [CBaseModelEntity](/docs/api/schemadefinitions/cbasemodelentity)
- [CBaseEntity](/docs/api/schemadefinitions/cbaseentity)
- [CEntityInstance](/docs/api/schemadefinitions/centityinstance)
- [ISchemaClass<CEntityInstance>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseModelEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseToggle>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseTrigger>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CTriggerBuoyancy>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### BuoyancyHelper

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerBuoyancy.cs#L18)

```csharp
CBuoyancyHelper BuoyancyHelper { get; }
```

#### Property Value

- [CBuoyancyHelper](/docs/api/schemadefinitions/cbuoyancyhelper)

### FluidDensity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerBuoyancy.cs#L20)

```csharp
ref float FluidDensity { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

## Methods

### FluidDensityUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerBuoyancy.cs#L22)

```csharp
void FluidDensityUpdated()
```

