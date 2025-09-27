---
title: CDampedPathAnimMotorUpdater
---

```csharp
public interface CDampedPathAnimMotorUpdater : CPathAnimMotorUpdaterBase, CAnimMotorUpdaterBase, ISchemaClass<CAnimMotorUpdaterBase>, ISchemaClass<CPathAnimMotorUpdaterBase>, ISchemaClass<CDampedPathAnimMotorUpdater>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**AnticipationHeadingParam** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDampedPathAnimMotorUpdater.cs#L22)

```csharp
CAnimParamHandle AnticipationHeadingParam { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/shared/schemadefinitions/canimparamhandle)

**AnticipationPosParam** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDampedPathAnimMotorUpdater.cs#L20)

```csharp
CAnimParamHandle AnticipationPosParam { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/shared/schemadefinitions/canimparamhandle)

**AnticipationTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDampedPathAnimMotorUpdater.cs#L16)

```csharp
ref float AnticipationTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**MaxSpringTension** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDampedPathAnimMotorUpdater.cs#L28)

```csharp
ref float MaxSpringTension { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**MinSpeedScale** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDampedPathAnimMotorUpdater.cs#L18)

```csharp
ref float MinSpeedScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**MinSpringTension** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDampedPathAnimMotorUpdater.cs#L26)

```csharp
ref float MinSpringTension { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**SpringConstant** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDampedPathAnimMotorUpdater.cs#L24)

```csharp
ref float SpringConstant { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

