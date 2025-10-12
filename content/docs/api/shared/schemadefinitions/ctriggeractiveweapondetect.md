---
title: CTriggerActiveWeaponDetect
---

```csharp
public interface CTriggerActiveWeaponDetect : CBaseTrigger, CBaseToggle, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseToggle>, ISchemaClass<CBaseTrigger>, ISchemaClass<CTriggerActiveWeaponDetect>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **OnTouchedActiveWeapon** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerActiveWeaponDetect.cs#L16)

```csharp
CEntityIOOutput OnTouchedActiveWeapon { get; }
```

- Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### **WeaponClassName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerActiveWeaponDetect.cs#L18)

```csharp
string WeaponClassName { get; set; }
```

- Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

