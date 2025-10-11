---
title: CCSPlayer_UseServices
---

```csharp
public interface CCSPlayer_UseServices : CPlayer_UseServices, CPlayerPawnComponent, ISchemaClass<CPlayerPawnComponent>, ISchemaClass<CPlayer_UseServices>, ISchemaClass<CCSPlayer_UseServices>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### **LastKnownUseEntity** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_UseServices.cs#L16)

```csharp
ref CHandle<CBaseEntity> LastKnownUseEntity { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### **LastUseTimeStamp** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_UseServices.cs#L18)

```csharp
GameTime_t LastUseTimeStamp { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### **TimeLastUsedWindow** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_UseServices.cs#L20)

```csharp
GameTime_t TimeLastUsedWindow { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

