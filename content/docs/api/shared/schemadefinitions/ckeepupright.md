---
title: CKeepUpright
---

```csharp
public interface CKeepUpright : CPointEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CPointEntity>, ISchemaClass<CKeepUpright>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**Active** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CKeepUpright.cs#L26)

```csharp
ref bool Active { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**AngularLimit** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CKeepUpright.cs#L24)

```csharp
ref float AngularLimit { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**AttachedObject** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CKeepUpright.cs#L22)

```csharp
ref CHandle<CBaseEntity> AttachedObject { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

**DampAllRotation** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CKeepUpright.cs#L28)

```csharp
ref bool DampAllRotation { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**LocalTestAxis** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CKeepUpright.cs#L18)

```csharp
ref Vector LocalTestAxis { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

**NameAttach** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CKeepUpright.cs#L20)

```csharp
ref CUtlSymbolLarge NameAttach { get; }
```

#### Property Value

- [CUtlSymbolLarge](/docs/api/shared/natives/cutlsymbollarge)

**WorldGoalAxis** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CKeepUpright.cs#L16)

```csharp
ref Vector WorldGoalAxis { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

