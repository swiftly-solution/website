---
title: CUserMessageCameraTransition
---

```csharp
public interface CUserMessageCameraTransition : ITypedProtobuf<CUserMessageCameraTransition>, INativeHandle, INetMessage<CUserMessageCameraTransition>, IDisposable
```

#### Implements

## Properties

**CameraType** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessageCameraTransition.cs#L18)

```csharp
uint CameraType { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**Duration** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessageCameraTransition.cs#L21)

```csharp
float Duration { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**ParamsDataDriven** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessageCameraTransition.cs#L24)

```csharp
CUserMessageCameraTransition_Transition_DataDriven ParamsDataDriven { get; }
```

#### Property Value

- [CUserMessageCameraTransition_Transition_DataDriven](/docs/api/shared/protobufdefinitions/cusermessagecameratransition_transition_datadriven)

