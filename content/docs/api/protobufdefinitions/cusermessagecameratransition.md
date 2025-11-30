---
title: CUserMessageCameraTransition
---

# Interface CUserMessageCameraTransition

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessageCameraTransition.cs#L9)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CUserMessageCameraTransition : ITypedProtobuf<CUserMessageCameraTransition>, INativeHandle, INetMessage<CUserMessageCameraTransition>, IDisposable
```

#### Implements

- [ITypedProtobuf<CUserMessageCameraTransition>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)
- [INetMessage<CUserMessageCameraTransition>](/docs/api/netmessages/inetmessaget)
- [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Properties

### CameraType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessageCameraTransition.cs#L18)

```csharp
uint CameraType { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Duration

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessageCameraTransition.cs#L21)

```csharp
float Duration { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ParamsDataDriven

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessageCameraTransition.cs#L24)

```csharp
CUserMessageCameraTransition_Transition_DataDriven ParamsDataDriven { get; }
```

#### Property Value

- [CUserMessageCameraTransition_Transition_DataDriven](/docs/api/protobufdefinitions/cusermessagecameratransition_transition_datadriven)

