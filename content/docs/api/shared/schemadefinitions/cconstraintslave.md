---
title: CConstraintSlave
---

```csharp
public interface CConstraintSlave : ISchemaClass<CConstraintSlave>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### BaseOrientation

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CConstraintSlave.cs#L17)

```csharp
ref Quaternion BaseOrientation { get; }
```

#### Property Value

- [Quaternion](/docs/api/shared/natives/quaternion)

### BasePosition

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CConstraintSlave.cs#L19)

```csharp
ref Vector BasePosition { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### BoneHash

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CConstraintSlave.cs#L21)

```csharp
ref uint BoneHash { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Name

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CConstraintSlave.cs#L25)

```csharp
string Name { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Weight

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CConstraintSlave.cs#L23)

```csharp
ref float Weight { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

