---
title: CTriggerPush
---

# Interface CTriggerPush

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerPush.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CTriggerPush : CBaseTrigger, CBaseToggle, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseToggle>, ISchemaClass<CBaseTrigger>, ISchemaClass<CTriggerPush>, ISchemaField, ISchemaClass, INativeHandle
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
- [ISchemaClass<CTriggerPush>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### PathSimple

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerPush.cs#L28)

```csharp
CPathSimple? PathSimple { get; }
```

#### Property Value

- [CPathSimple](/docs/api/schemadefinitions/cpathsimple)?

### PathSimpleName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerPush.cs#L26)

```csharp
string PathSimpleName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### PushDirEntitySpace

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerPush.cs#L20)

```csharp
ref Vector PushDirEntitySpace { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### PushEntitySpace

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerPush.cs#L18)

```csharp
ref QAngle PushEntitySpace { get; }
```

#### Property Value

- [QAngle](/docs/api/natives/qangle)

### SplinePushType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerPush.cs#L30)

```csharp
ref uint SplinePushType { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### TriggerOnStartTouch

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerPush.cs#L22)

```csharp
ref bool TriggerOnStartTouch { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UsePathSimple

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerPush.cs#L24)

```csharp
ref bool UsePathSimple { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

