---
title: CUserMsg_ParticleManager_UpdateParticleTransform
---

```csharp
public interface CUserMsg_ParticleManager_UpdateParticleTransform : ITypedProtobuf<CUserMsg_ParticleManager_UpdateParticleTransform>, INativeHandle
```

#### Implements

## Properties

### ControlPoint

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMsg_ParticleManager_UpdateParticleTransform.cs#L13)

```csharp
int ControlPoint { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### InterpolationInterval

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMsg_ParticleManager_UpdateParticleTransform.cs#L22)

```csharp
float InterpolationInterval { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Orientation

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMsg_ParticleManager_UpdateParticleTransform.cs#L19)

```csharp
CMsgQuaternion Orientation { get; }
```

#### Property Value

- [CMsgQuaternion](/docs/api/shared/protobufdefinitions/cmsgquaternion)

### Position

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMsg_ParticleManager_UpdateParticleTransform.cs#L16)

```csharp
Vector Position { get; set; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

