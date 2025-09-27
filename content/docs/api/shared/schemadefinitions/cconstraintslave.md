---
title: CConstraintSlave
---

```csharp
public interface CConstraintSlave : ISchemaClass<CConstraintSlave>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**BaseOrientation** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CConstraintSlave.cs#L16)

```csharp
ref Quaternion BaseOrientation { get; }
```

#### Property Value

- [Quaternion](/docs/api/shared/natives/quaternion)

**BasePosition** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CConstraintSlave.cs#L18)

```csharp
ref Vector BasePosition { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

**BoneHash** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CConstraintSlave.cs#L20)

```csharp
ref uint BoneHash { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**Name** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CConstraintSlave.cs#L24)

```csharp
ref CUtlString Name { get; }
```

#### Property Value

- [CUtlString](/docs/api/shared/natives/cutlstring)

**Weight** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CConstraintSlave.cs#L22)

```csharp
ref float Weight { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

