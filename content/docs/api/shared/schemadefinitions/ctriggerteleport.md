---
title: CTriggerTeleport
---

```csharp
public interface CTriggerTeleport : CBaseTrigger, CBaseToggle, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseToggle>, ISchemaClass<CBaseTrigger>, ISchemaClass<CTriggerTeleport>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **CheckDestIfClearForPlayer** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerTeleport.cs#L22)

```csharp
ref bool CheckDestIfClearForPlayer { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **Landmark** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerTeleport.cs#L16)

```csharp
string Landmark { get; set; }
```

- Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **MirrorPlayer** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerTeleport.cs#L20)

```csharp
ref bool MirrorPlayer { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **UseLandmarkAngles** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerTeleport.cs#L18)

```csharp
ref bool UseLandmarkAngles { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

