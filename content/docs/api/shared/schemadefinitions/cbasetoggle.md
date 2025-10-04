---
title: CBaseToggle
---

```csharp
public interface CBaseToggle : CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseToggle>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**Activator** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseToggle.cs#L38)

```csharp
ref CHandle<CBaseEntity> Activator { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

**AlwaysFireBlockedOutputs** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseToggle.cs#L24)

```csharp
ref bool AlwaysFireBlockedOutputs { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**Angle1** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseToggle.cs#L32)

```csharp
ref QAngle Angle1 { get; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

**Angle2** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseToggle.cs#L34)

```csharp
ref QAngle Angle2 { get; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

**FinalAngle** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseToggle.cs#L42)

```csharp
ref QAngle FinalAngle { get; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

**FinalDest** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseToggle.cs#L40)

```csharp
ref Vector FinalDest { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

**Height** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseToggle.cs#L36)

```csharp
ref float Height { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**Lip** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseToggle.cs#L22)

```csharp
ref float Lip { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**Master** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseToggle.cs#L46)

```csharp
string Master { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

**MoveAng** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseToggle.cs#L30)

```csharp
ref QAngle MoveAng { get; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

**MoveDistance** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseToggle.cs#L18)

```csharp
ref float MoveDistance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**MovementType** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseToggle.cs#L44)

```csharp
ref int MovementType { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**Position1** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseToggle.cs#L26)

```csharp
ref Vector Position1 { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

**Position2** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseToggle.cs#L28)

```csharp
ref Vector Position2 { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

**Toggle_state** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseToggle.cs#L16)

```csharp
ref TOGGLE_STATE Toggle_state { get; }
```

#### Property Value

- [TOGGLE_STATE](/docs/api/shared/schemadefinitions/toggle_state)

**Wait** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseToggle.cs#L20)

```csharp
ref float Wait { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

