---
title: CPointTeleport
---

```csharp
public interface CPointTeleport : CServerOnlyPointEntity, CServerOnlyEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CServerOnlyEntity>, ISchemaClass<CServerOnlyPointEntity>, ISchemaClass<CPointTeleport>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **SaveAngles** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointTeleport.cs#L18)

```csharp
ref QAngle SaveAngles { get; }
```

- Property Value

- [QAngle](/docs/api/shared/natives/qangle)

### **SaveOrigin** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointTeleport.cs#L16)

```csharp
ref Vector SaveOrigin { get; }
```

- Property Value

- [Vector](/docs/api/shared/natives/vector)

### **TeleportParentedEntities** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointTeleport.cs#L20)

```csharp
ref bool TeleportParentedEntities { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **TeleportUseCurrentAngle** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointTeleport.cs#L22)

```csharp
ref bool TeleportUseCurrentAngle { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

