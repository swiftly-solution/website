---
title: CTriggerPush
---

```csharp
public interface CTriggerPush : CBaseTrigger, CBaseToggle, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseToggle>, ISchemaClass<CBaseTrigger>, ISchemaClass<CTriggerPush>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### PathSimple

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerPush.cs#L28)

```csharp
CPathSimple? PathSimple { get; }
```

#### Property Value

- [CPathSimple](/docs/api/shared/schemadefinitions/cpathsimple)?

### PathSimpleName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerPush.cs#L26)

```csharp
string PathSimpleName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### PushDirEntitySpace

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerPush.cs#L20)

```csharp
ref Vector PushDirEntitySpace { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### PushEntitySpace

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerPush.cs#L18)

```csharp
ref QAngle PushEntitySpace { get; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

### SplinePushType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerPush.cs#L30)

```csharp
ref uint SplinePushType { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### TriggerOnStartTouch

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerPush.cs#L22)

```csharp
ref bool TriggerOnStartTouch { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UsePathSimple

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerPush.cs#L24)

```csharp
ref bool UsePathSimple { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

