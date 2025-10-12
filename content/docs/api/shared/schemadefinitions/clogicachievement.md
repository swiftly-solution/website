---
title: CLogicAchievement
---

```csharp
public interface CLogicAchievement : CLogicalEntity, CServerOnlyEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CServerOnlyEntity>, ISchemaClass<CLogicalEntity>, ISchemaClass<CLogicAchievement>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **AchievementEventID** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLogicAchievement.cs#L18)

```csharp
string AchievementEventID { get; set; }
```

- Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **Disabled** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLogicAchievement.cs#L16)

```csharp
ref bool Disabled { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **OnFired** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLogicAchievement.cs#L20)

```csharp
CEntityIOOutput OnFired { get; }
```

- Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

