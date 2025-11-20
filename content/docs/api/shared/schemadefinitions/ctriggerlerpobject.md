---
title: CTriggerLerpObject
---

```csharp
public interface CTriggerLerpObject : CBaseTrigger, CBaseToggle, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseToggle>, ISchemaClass<CBaseTrigger>, ISchemaClass<CTriggerLerpObject>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AttachTouchingObject

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerLerpObject.cs#L38)

```csharp
ref bool AttachTouchingObject { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### EntityToWaitForDisconnect

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerLerpObject.cs#L40)

```csharp
ref CHandle<CBaseEntity> EntityToWaitForDisconnect { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### LerpDuration

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerLerpObject.cs#L26)

```csharp
ref float LerpDuration { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LerpEffect

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerLerpObject.cs#L34)

```csharp
string LerpEffect { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### LerpRestoreMoveType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerLerpObject.cs#L28)

```csharp
ref bool LerpRestoreMoveType { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LerpSound

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerLerpObject.cs#L36)

```csharp
string LerpSound { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### LerpTarget

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerLerpObject.cs#L18)

```csharp
string LerpTarget { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### LerpTarget1

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerLerpObject.cs#L20)

```csharp
ref CHandle<CBaseEntity> LerpTarget1 { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### LerpTargetAttachment

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerLerpObject.cs#L22)

```csharp
string LerpTargetAttachment { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### LerpTargetAttachment2

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerLerpObject.cs#L24)

```csharp
AttachmentHandle_t LerpTargetAttachment2 { get; }
```

#### Property Value

- [AttachmentHandle_t](/docs/api/shared/schemadefinitions/attachmenthandle_t)

### LerpingObjects

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerLerpObject.cs#L32)

```csharp
ref CUtlVector<lerpdata_t> LerpingObjects { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[lerpdata_t](/docs/api/shared/schemadefinitions/lerpdata_t)>

### OnDetached

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerLerpObject.cs#L46)

```csharp
CEntityIOOutput OnDetached { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OnLerpFinished

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerLerpObject.cs#L44)

```csharp
CEntityIOOutput OnLerpFinished { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OnLerpStarted

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerLerpObject.cs#L42)

```csharp
CEntityIOOutput OnLerpStarted { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### SingleLerpObject

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerLerpObject.cs#L30)

```csharp
ref bool SingleLerpObject { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

