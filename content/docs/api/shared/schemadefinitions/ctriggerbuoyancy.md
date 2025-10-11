---
title: CTriggerBuoyancy
---

```csharp
public interface CTriggerBuoyancy : CBaseTrigger, CBaseToggle, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseToggle>, ISchemaClass<CBaseTrigger>, ISchemaClass<CTriggerBuoyancy>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### **BuoyancyHelper** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerBuoyancy.cs#L16)

```csharp
CBuoyancyHelper BuoyancyHelper { get; }
```

#### Property Value

- [CBuoyancyHelper](/docs/api/shared/schemadefinitions/cbuoyancyhelper)

### **FluidDensity** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerBuoyancy.cs#L18)

```csharp
ref float FluidDensity { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

## Methods

### **FluidDensityUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerBuoyancy.cs#L20)

```csharp
void FluidDensityUpdated()
```

