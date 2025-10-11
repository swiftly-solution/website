---
title: CTriggerDetectBulletFire
---

```csharp
public interface CTriggerDetectBulletFire : CBaseTrigger, CBaseToggle, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseToggle>, ISchemaClass<CBaseTrigger>, ISchemaClass<CTriggerDetectBulletFire>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### **OnDetectedBulletFire** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerDetectBulletFire.cs#L18)

```csharp
CEntityIOOutput OnDetectedBulletFire { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### **PlayerFireOnly** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerDetectBulletFire.cs#L16)

```csharp
ref bool PlayerFireOnly { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

